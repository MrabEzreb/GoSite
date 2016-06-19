#!/bin/bash
FILES="/home/mkezreb/GoSite/dep/css/*.scss"
for f in $FILES
do
	echo "Processing File $f"
	sass $f "${f%.scss}.css"
done
