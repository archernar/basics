function core.print.debug() {
    local ff=$(printf "%-32s\n" "${FUNCNAME[1]}")
    local sz="$(printf "%s %s: %s %s" "Info" "$SILENT" "$ff" "$msg")"
    if [ "$LOGLEVEL" -ge 5 ]; then
        util.println.white "$sz"
    fi
}
