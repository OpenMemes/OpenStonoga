@ECHO off
cls
title Zbysiator 1.0
:startmenu
echo ==============
echo Witaj w Zbysiatorze 1.0!
echo Projekt stworzony przez: MrBoombastic
echo ja tu tylko sprzatam ~ mafinek
echo Wybierz co chcesz zrobic
echo 1. Fetch Blasty
echo 2. Fetch Kwejk
echo 3. Get Blasty
echo 4. Get Kwejk
echo 5. Renamer 
echo 6. Randomer
echo 7. Instalacja

set /p wybieram:={1;2;3;4;5;6;7}:  
if %wybieram:%==1 goto fetchblasty
if %wybieram:%==2 goto fetchkwejk
if %wybieram:%==3 goto getblasty
if %wybieram:%==4 goto getkwejk
if %wybieram:%==5 goto renamer
if %wybieram:%==6 goto randomer
if %wybieram:%==7 goto instalacja

:fetchblasty
node downloaders/blastyFETCH.js
goto startmenu

:fetchkwejk
node downloaders/kwejkFETCH.js
goto startmenu

:getblasty
node downloaders/blastyGET.js
goto startmenu

:getkwejk
node downloaders/kwejkGET.js
goto startmenu

:renamer
node downloaders/renamer.js
goto startmenu

:randomer
node random.js
goto startmenu

:Instalacja
npm i 
goto startmenu