create database wildjob_app character set utf8 collate utf8_unicode_ci;
create user 'wildjobapp'@'localhost' identified by 'wildjob31';
  grant all privileges on wildjob_app.* to'wildjobapp'@'localhost';
