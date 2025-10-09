@include "library.gawk"
@load "ordchr"
BEGIN {
    FPAT = "([^,]+)|(\"[^\"]+\")"
    ffirst=1
    first=1
    rtflag=0 
    ct=1
    c=1
    f=1
    thehash=""
    alink=""
    loca=""
    boca=""
    h="kfgkfjglfkgjrlkjglr"
    system("rm -f questions.lst")
    system("rm -f questions.report")
    system("rm -f report.html")
    print "<table id=myTable cellspacing=1 cellpadding=1  valign=top border=0 width=100%>" >> "report.html"
    print "<tr><td width=100%>" >> "report.html"
    system("rm -rf ./pages")
    system("mkdir -p ./pages")
}
END {
    print "</table>" >> "report.html"
    print "</td></tr>" >> "report.html"
    print "</table>" >> "report.html"
}
{
    codetext=$3
    gsub(/["]["]/, "'", $0)
    gsub(/["]["]/, "'", $0)
    gsub(/["]["]/, "'", $0)
    gsub(/^["]/, "", $1)
    gsub(/["]$/, "", $1)
    gsub(/^["]/, "", $2)
    gsub(/["]$/, "", $2)
    gsub(/^["]/, "", $3)
    gsub(/["]$/, "", $3)
    #gsub(/[.][ ]/, ".<br><br>", $3)

    lno=c ". "
    lno=""
    if (h != $1) {


        thehash=ahash($1)
        print $1 ",,, " ahash($1)
        #print "<div class='topic-card'><h1>" $1 "</h1><a id=" sq(ahash($1)) "></a></div>" >> "questions.lst"
        #print "<div class='topic-card'><h1><a id=" sq(ahash($1)) ">" $1 "</a></h1></div>" >> "questions.lst"
        locxxx="<div class='topic-card'><h1><a id=" sq(ahash($1)) ">" $1 "</a></h1></div>"
        loca="<a id=" sq(ahash($1)) "></a><div class='topic-card'><h1>191919191" $1 "</h1></div>"
        alink="<a class=sl id=" sq(ahash($1)) ">" $1 "</a>"
        loca="<div class='topic-card-bold'>" $1 "</div>"
        loca="<div class='topic-card-bold'>" alink "</div>"
        #print loca >> "questions.lst"
        h=$1
        francis=alink 
        francis2=$1 
        if (ffirst == 0) {
            print "</div>"                     >> "questions.lst"
            print "<br>"                       >> "questions.lst"
            print francis                      >> "questions.lst"
            print "<br>"                       >> "questions.lst"
            print "<div class='content-grid'>" >> "questions.lst"
        }
        else {
            print francis                      >> "questions.lst"
            print "<br>"                       >> "questions.lst"
            print "<div class='content-grid'>" >> "questions.lst"
        }
        ffirst=0
        # if (first == 0)
        #    closeHTMLFile(ahash($1), previoushashedfilename) 
        #previoushashedfilename=openHTMLFile(ahash($1)) 
        #
        #
        if (rtflag == 1)
            print "</table>" >> "report.html"
        #print "<table id=myTable cellspacing=2 cellpadding=2  valign=top border=1 width=80%>" >> "report.html"
        print "<table nom=" sq($1) " class=e id=" sq("SPL" ahash($1)) " cellspacing=2 cellpadding=2  valign=top border=1 width=100%>" >> "report.html"
        rtflag=1
        
        #print "<tr><td colspan=4 width=99% align=middle><button onclick=" dq("ettp('#" "SPL" ahash($1) "')") ">Export to PDF</button></td></tr>" >> "report.html"
        ico="<img title=" sq("create pdf") " valign=center src=icon.png>"
        ico="<img class=q>"
        print "<tr><td colspan=5 width=99% align=middle><a class=sl onclick=" dq("ettp('#" "SPL" ahash($1) "')") ">" ico "</a>&nbsp;<a class=s>" $1 "</a></td></tr>" >> "report.html"
        print "</td></tr>" >> "report.html"
        first=0
    } else {
      francis=$1 
    }
    putMDFile($2, $3) 
    putTextFile($1 " : " $2,wrap_text($3, 80, "", "\n"))
        #putHTMLFile(ahash($1), $2) 
        #putHTMLFile(ahash($1), $3) 
        #putHTMLFile(ahash($1), "") 

    sz=$3
    sdq="\""
    ssq="\'"
    # gsub(/[']/, "\\" sdq, sz)
    #gsub(/["]/, "\\" sdq, sz)
    gsub(/[']/, "`", sz)
    gsub(/[']/, "`", sz)
    gsub(/[']/, "`", sz)
    gsub(/["]/, "`", sz)
    gsub(/["]/, "`", sz)
    gsub(/["]/, "`", sz)
    sz = wrap_text(sz, 80, " * ")
    codetext=dq(" * " sz)

    buta="<button onClick='opE("  codetext  ")'>open template</button>"
    if ($1 ~ /^Multiple Choice/) buta=""

    cb="<input type='checkbox' id='emn" c "' name='emn" c "' class='scb'>"
    loca=""
    
    print "<div class='topic-card'>"                                          >> "questions.lst"
    print "<table width=100%><tr>"                                              >> "questions.lst"
    #print "<td>" "" "</td>"                                                   >> "questions.lst"
    print "<td><u>" francis2 "</u></td>"                                      >> "questions.lst"
    print "<td align=right><b>" cb "</b></td>"                                >> "questions.lst"
    print "</tr></table>"                                                     >> "questions.lst"
    print "<div class='tcd'>"                                   >> "questions.lst"
    print "<br><div>" $2 "</div><br>"                                  >> "questions.lst"
    print "<h3>" lno ""  "</h3>" "<div>" $3 "</div><br>"                      >> "questions.lst"
    print "</div>" >> "questions.lst"
    print "<div align=right>" buta "</div>" >> "questions.lst"

    print "</div>" >> "questions.lst"



    #toupper(bhash($2 $3))
    print "<tr>" "<td>" ct "</td>" "<td>" ""  "</td>" "<td nowrap>" $1 "</td>" "<td nowrap>" $2 "</td>" "<td>" wrap_text($3,-1,"") "</td>" "</tr>" >> "report.html"
    ct++
    # print " <div class='topic-card'>" "<p valign=top align=right><font size=-1>" $1 "</font>" cb "</p>" "<h3>" lno $2  "</h3>" "<p>" $3 "</p>"  "</div>" >> "questions.lst"

    close("questions.lst")
    c++
}
 
