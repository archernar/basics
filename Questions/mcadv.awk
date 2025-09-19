@include "library.gawk"
@load "ordchr"
BEGIN {
    FPAT = "([^,]+)|(\"[^\"]+\")"
    ct=0
}
END {
}
{
    ct++
    gsub(/["]["]/, "'", $0)
    gsub(/["]["]/, "'", $0)
    gsub(/["]["]/, "'", $0)
    gsub(/^["]/, "", $1)
    gsub(/["]$/, "", $1)
    gsub(/^["]/, "", $2)
    gsub(/["]$/, "", $2)
    gsub(/^["]/, "", $3)
    gsub(/["]$/, "", $3)
    gsub(/^["]/, "", $4)
    gsub(/["]$/, "", $4)
    gsub(/^["]/, "", $5)
    gsub(/["]$/, "", $5)
    if (1==0) {
        print $1
        print "      A. " $2
        print "      B. " $3
        print "      C. " $4
        print "      D. " $5
    }
    Q= $1 "AREALBRAREALBR"
    A="&nbsp;A.&nbsp;" $2 "AREALBR"
    B="&nbsp;B.&nbsp;" $3 "AREALBR"
    C="&nbsp;C.&nbsp;" $4 "AREALBR"
    D="&nbsp;D.&nbsp;" $5 "AREALBR"
    ALL="Multiple Choice Advanced" "," dq("--") "," dq(Q A B C D)
    print ALL
}
