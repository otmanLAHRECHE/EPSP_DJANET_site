from django.contrib.auth.base_user import BaseUserManager

from django.utils import timezone

class UserManager(BaseUserManager):

    def _create_user(self, first_name, last_name, email, password, is_staff, is_active, is_superuser, **extra_fields):
        if not email:
            raise ValueError('Users must have an email address')
        now = timezone.now()
        email = self.normalize_email(email)
        user = self.model(
            email=email,
            first_name = first_name,
            last_name = last_name,
            is_staff=is_staff,
            is_active=is_active,
            is_superuser=is_superuser,
            last_login=now,
            date_joined=now,
            **extra_fields
        )
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_user(self, first_name, last_name, email, password, **extra_fields):
        return self._create_user(first_name, last_name, email, password, False, False, False, **extra_fields)

    def create_superuser(self, first_name, last_name, email, password, **extra_fields):
        user = self._create_user(first_name, last_name, email, password, True, True, True, **extra_fields)
        user.save(using=self._db)
        return user