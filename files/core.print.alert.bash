function core.print.alert() {
    local ff=$(printf "%-32s\n" "${FUNCNAME[1]}")
    local sz="$(printf "%s %s: %s %s" "Alrt" "$SILENT" "$ff" "$msg")"
    if [ "$LOGLEVEL" -gt $LL2A ]; then
        if core._should_print_color 1; then
            util.println.magenta "$sz"
        else
            util.println.white "$sz"
        fi
    fi
}
