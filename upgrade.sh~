#!/bin/bash
DATE=`date +%Y-%m-%d`
LOGFILE="/home/mkezreb/GoSite/logs/$DATE"
touch "$LOGFILE"
echo "Logging to logs/$date" | tee "$LOGFILE"
git pull origin master > "$LOGFILE"
./updateWeb.sh > "$LOGFILE"
./compile.sh > "$LOGFILE"
echo "Upgrade complete" | tee "$LOGFILE"
