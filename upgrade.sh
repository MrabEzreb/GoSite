#!/bin/bash
DATE=`date`
LOGFILE="/home/mkezreb/GoSite/logs/$DATE"
touch "$LOGFILE"
echo "Logging to logs/$date" | tee "$LOGFILE"
git pull origin master >> "$LOGFILE"
./updateWeb.sh >> "$LOGFILE"
./compile.sh >> "$LOGFILE"
echo "Upgrade complete" | tee "$LOGFILE"
