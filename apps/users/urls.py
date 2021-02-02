from django.urls import path,include
from . import views


app_name = 'users'
urlpatterns = [
    path(r'profile/', views.profile, name='user_profile'),
    path(r'profile/upload-image/', views.upload_profile_image, name='upload_profile_image'),
    # path('signup/',views.RegisterView.as_view(), name = 'user_register'),
    # path('login/',views.UserLoginView.as_view(),name = 'user_login'),
    
    path('user-setting/',views.UserSettingsView.as_view(),name = 'user_profile'),
    path('changepassword/',views.ChangePasswordView.as_view(),name = 'change_password'),
    path('rest-auth-register/', views.RegisterView.as_view(), name='rest_register'), # rest allauth


]
