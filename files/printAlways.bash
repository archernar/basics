function printAlways() {
         LASTCONSOLEMESSAGE="$1"
    local ff=$(printf "%-12s\n" "${FUNCNAME[1]}")
    local sz="$(printf "%s %s: %s %s" "      " "$SILENT" "$ff" "$msg")"
    printAtLevel "$sz" $LL0 "    " yellow
}
