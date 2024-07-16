# # middleware.py
# from django.conf import settings
# from django.shortcuts import redirect

# class AuthRequiredMiddleware:
#     def __init__(self, get_response):
#         self.get_response = get_response

#     def __call__(self, request):
#         if not request.user.is_authenticated and request.path.startswith('/api/'):
#             # Redirect to login page or handle unauthorized access as needed
#             return redirect(settings.LOGIN_URL)
        
#         response = self.get_response(request)
#         return response

# middleware.py
# from django.conf import settings
# from django.shortcuts import redirect
# from django.urls import resolve

# class AuthRequiredMiddleware:
#     def __init__(self, get_response):
#         self.get_response = get_response

#     def __call__(self, request):
#         # Resolve the current URL name
#         current_url_name = resolve(request.path_info).url_name if request.path_info != '/' else 'index'

#         # List of allowed URLs for unauthenticated users
#         allowed_urls = ['login', 'signup']  # Add other allowed URLs if needed

#         if not request.user.is_authenticated and current_url_name not in allowed_urls:
#             # Redirect to the frontend login page if the user is not authenticated
#             return redirect(settings.LOGIN_URL)
        
#         response = self.get_response(request)
#         return response
# import logging
# from django.conf import settings
# from django.shortcuts import redirect
# from django.urls import resolve
# from rest_framework.authtoken.models import Token
# from django.http import JsonResponse

# logger = logging.getLogger(__name__)

# class AuthRequiredMiddleware:
#     def __init__(self, get_response):
#         self.get_response = get_response

#     def __call__(self, request):
#         logger.debug(f"Request path: {request.path_info}")
#         logger.debug(f"Request user: {request.user}")

#         # Resolve the current URL name
#         current_url_name = resolve(request.path_info).url_name if request.path_info != '/' else 'index'
#         logger.debug(f"Current URL name: {current_url_name}")

#         # List of allowed URLs for unauthenticated users
#         allowed_urls = ['login', 'signup']  # Add other allowed URLs if needed

#         # Check if the request is for an API endpoint
#         if request.path.startswith('/api/'):
#             # Check if token is provided in headers
#             auth_token = request.headers.get('Authorization')
#             if auth_token:
#                 try:
#                     token_key = auth_token.split(' ')[1]
#                     token = Token.objects.get(key=token_key)
#                     request.user = token.user
#                     logger.debug(f"Authenticated user: {request.user}")
#                 except Token.DoesNotExist:
#                     logger.debug("Invalid token.")
#                     return JsonResponse({'detail': 'Invalid token.'}, status=401)
#             else:
#                 logger.debug("Authentication credentials were not provided.")
#                 return JsonResponse({'detail': 'Authentication credentials were not provided.'}, status=401)
#         else:
#             # Handle non-API requests
#             if not request.user.is_authenticated and current_url_name not in allowed_urls:
#                 logger.debug("User not authenticated, redirecting to login.")
#                 return redirect(settings.LOGIN_URL)

#         response = self.get_response(request)
#         return response


# middleware.py

from django.conf import settings
from django.shortcuts import redirect
from django.urls import reverse

EXEMPT_URLS = [reverse('login'), reverse('signup'), '/auth/token/login/', '/auth/jwt/create/']

class AuthRequiredMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        response = self.get_response(request)

        path = request.path_info.lstrip('/')
        if not any(path.startswith(url) for url in EXEMPT_URLS):
            if not request.user.is_authenticated:
                return redirect(settings.LOGIN_URL)

        return response
