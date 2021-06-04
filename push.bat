@echo off
set commitMessage=%1
set prodPush=%2

IF %prodPush%==prod (
    echo "<--------- bulding for prod --------->"
    ng build
    git add .
    git commit -m "Release Version : %commitMessage%. Built : %DATE% %TIME%"
    git push
) ELSE (
    echo commiting
    git add .
    git commit -m "%commitMessage%"
    git push
)