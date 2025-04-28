function core.print.info() {
    local ff=$(printf "%-32s\n" "${FUNCNAME[1]}")
    local sz="$(printf "%s %s: %s %s" "Info" "$SILENT" "$ff" "$msg")"
    if [ "$LOGLEVEL" -ge 4 ]; then
        if core._should_print_color 1; then
            util.println.green "$sz"
        else
            util.println.white "$sz"
        fi
    fi
}
