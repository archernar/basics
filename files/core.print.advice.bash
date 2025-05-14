function core.print.advice() {
         local lvl="$LL3A"
    local ff=$(printf "%-32s\n" "${FUNCNAME[1]}")
    ff=$(printf "%-32s\n" "${FUNCNAME[2]}${FUNCNAME[1]}")
    local sz="$(printf "%s %s: %s %s" "Advc$lvl" "$SILENT" "$ff" "$msg")"
    if [ "$LOGLEVEL" -gt $lvl ]; then
        util.print.color blue "$sz"
    fi
}
