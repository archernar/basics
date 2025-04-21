#!/usr/bin/bash
Tmp=/tmp/$$
Tmp0=/tmp/$$_$$
Tmp1=/tmp/$$_$$_$$
Tmp2=/tmp/$$_$$_$$_$$
Tmp3=/tmp/$$_$$_$$_$$_$$
trap 'exit 0' INT HUP QUIT TERM ALRM USR1
trap 'rm -f "$Tmp" "$Tmp0" "$Tmp1" "$Tmp2" "$Tmp3"' EXIT
rm -f "$Tmp $Tmp0 $Tmp1 $Tmp2 $Tmp3"  >/dev/null 2>&1;


egrep "(function.*[(][)])|(Function-Args)" bash.library |  \
      sed 's/function //' |                     \
      sed -e 's/[ ]*{$//' |                     \
      sed 's/^[[:space:]]*//' |                 \
      sed 's/[[:space:]]*$//' |                 \
      sed -e 's/[#].*$//'     |                 \
      gawk '
      {
          if ( NR == 1 ) {
              prevline=$0
              next
          }
          else {
              if ( $0 ~ /local/) {
                  gsub(/local[ ]*/, "", $0);
                  gsub(/=..../, "", $0);
                  gsub(/;/, ",", $0);
                  print prevline "," $0
              }
              else {
                  prevline=$0
              }
          }
      }' | gawk '
      {
          sz = $0
          gsub(/[,][ ]*/, ",", sz);
          gsub(/[(]/, "", sz);
          gsub(/[)]/, "", sz);
          sub(/[,]/, "(", sz);
          sub(/[ ]*$/, "", sz);
          sub(/$/, ")", sz);
          sub(/[,][)]/, ")", sz);
          print sz

      }' > $Tmp


cat "$Tmp" > "functionlist.txt"
cat "$Tmp"














# source ~/bash.library
#   # Iterate through each line of the file and pad it
#   while IFS= read -r line; do
#     echo "         1         2         3         4         5         6         7"
#     echo "1234567890123456789012345678901234567890123456789012345678901234567890"
#     justify_line "$line" "44"
#   done < "vim.raw"
