@include "library.gawk"
@load "ordchr"
BEGIN {
    FPAT = "([^,]+)|(\"[^\"]+\")"
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
    print "<table id=myTable cellspacing=2 cellpadding=2  valign=top border=1 width=80%>" >> "report.html"
}
END {
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
        alink="<a class=signpostlink id=" sq(ahash($1)) ">" $1 "</a>"
        loca="<div class='topic-card-bold'>" $1 "</div>"
        loca="<div class='topic-card-bold'>" alink "</div>"
        #print loca >> "questions.lst"
        h=$1
        francis=alink 
    } else {
      francis=$1 
    }

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
    codetext=dq(" * " sz)

    buta="<button onClick='javascript:openEditor(  "  codetext  "  )'>open</button>"
    cb="<input type='checkbox' id='setting" c "' name='emailNotifications" c "' class='savable-checkbox h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'>"
    loca=""
    
    print " <div class='topic-card'>" "<table cellspacing=0 cellpadding=0  valign=top border=0 width=99%><tr><td align=left valign=middle>" cb "</td><td align=left valign=middle>" $2 "</td><td align=right valign=middle><b>" francis "</b></td></tr></table>" "<h3>" lno ""  "</h3>" "" $3 "<br>" buta "</div>" >> "questions.lst"
    # OLD print " <p>" $1 " - " $2 "</p>" "<p>" $3 "</p>" "<hr>" >> "report.html"
    print "<tr>" "<td>" ct "</td>" "<td>" $1 "</td>" "<td>" $2 "</td>" "<td>" $3 "</td>" "</tr>" >> "report.html"
    ct++
    # print " <div class='topic-card'>" "<p valign=top align=right><font size=-1>" $1 "</font>" cb "</p>" "<h3>" lno $2  "</h3>" "<p>" $3 "</p>"  "</div>" >> "questions.lst"

    close("questions.lst")
    c++
}
 
