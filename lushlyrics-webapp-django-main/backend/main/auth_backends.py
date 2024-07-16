from django.contrib.auth.backends import ModelBackend
from django.contrib.auth import get_user_model

UserModel = get_user_model()

class EmailOrUsernameModelBackend(ModelBackend):
    def authenticate(self, request, username=None, password=None, **kwargs):
        if username is None:
            username = kwargs.get(UserModel.USERNAME_FIELD)

        try:
            # Allow login with either username or email
            user = UserModel._default_manager.get(email=username)
        except UserModel.DoesNotExist:
            try:
                user = UserModel._default_manager.get(username=username)
            except UserModel.DoesNotExist:
                UserModel().set_password(password)
                return

        if user.check_password(password) and self.user_can_authenticate(user):
            return user
