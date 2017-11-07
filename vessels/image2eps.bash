#!/usr/bin/bash

#!/usr/local/bin/bash

# Usage nonmax [dirlist]

#conv="c:\Progra~1\ImageMagick\convert.exe"
conv=/cygdrive/c/progra~1/ImageMagick/convert.exe

# for each directory
for f in `cat $1`; do
  echo Processing $f
 
  # strip extension
  fnoex=`expr $f : '\(.*\)\.[^.]*'`
  ${conv} $f $fnoex.jpg

done
