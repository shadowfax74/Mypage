@echo off
chcp 65001 > nul
echo 소프트웨어 개발자 소개 페이지를 여는 중입니다...
start "" "%~dp0dist\index.html"
exit
