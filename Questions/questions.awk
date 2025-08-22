@include "library.gawk"
@load "ordchr"
BEGIN {
    FPAT = "([^,]+)|(\"[^\"]+\")"
    c=1
    f=1
    thehash=""
    alink=""
    loca=""
    h="kfgkfjglfkgjrlkjglr"
    system("rm -f questions.lst")
}
{
    gsub(/^["]/, "", $1)
    gsub(/["]$/, "", $1)
    gsub(/^["]/, "", $2)
    gsub(/["]$/, "", $2)
    gsub(/^["]/, "", $3)
    gsub(/["]$/, "", $3)
    gsub(/[.][ ]/, ".<br><br>", $3)

    lno=c ". "
    lno=""
    if (h != $1) {
        thehash=ahash($1)
        print $1 ",,, " ahash($1)
        #print "<div class='topic-card'><h1>" $1 "</h1><a id=" sq(ahash($1)) "></a></div>" >> "questions.lst"
        #print "<div class='topic-card'><h1><a id=" sq(ahash($1)) ">" $1 "</a></h1></div>" >> "questions.lst"
        locxxx="<div class='topic-card'><h1><a id=" sq(ahash($1)) ">" $1 "</a></h1></div>"
        loca="<a id=" sq(ahash($1)) "></a><div class='topic-card'><h1>191919191" $1 "</h1></div>"
        alink="<a id=" sq(ahash($1)) ">" $1 "</a>"
        loca="<div class='topic-card-bold'>" $1 "</div>"
        loca="<div class='topic-card-bold'>" alink "</div>"
        print loca >> "questions.lst"
        h=$1
    }
    cb="<input type='checkbox' id='setting" c "' name='emailNotifications" c "' class='savable-checkbox h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'>"
    loca=""
    
    
    print " <div class='topic-card'>" "<table valign=top border=0 width=100%><tr><td align=left valign=middle>" cb "</td><td align=left valign=middle><b>" $2 "</b></td><td align=right valign=middle>" $1 "</td></tr></table>" "<h3>" lno ""  "</h3>" "<p>" $3 "</p>" "</div>" >> "questions.lst"
    # print " <div class='topic-card'>" "<p valign=top align=right><font size=-1>" $1 "</font>" cb "</p>" "<h3>" lno $2  "</h3>" "<p>" $3 "</p>" "</div>" >> "questions.lst"

    close("questions.lst")
    c++
}
 
