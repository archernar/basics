#!/usr/bin/bash
Tmp=/tmp/$$
Tmp0=/tmp/$$_$$
Tmp1=/tmp/$$_$$_$$
Tmp2=/tmp/$$_$$_$$_$$
Tmp3=/tmp/$$_$$_$$_$$_$$
trap 'exit 0' INT HUP QUIT TERM ALRM USR1
trap 'rm -f "$Tmp" "$Tmp0" "$Tmp1" "$Tmp2" "$Tmp3"' EXIT
rm -f "$Tmp $Tmp0 $Tmp1 $Tmp2 $Tmp3"  >/dev/null 2>&1;

source ~/bash.library


#   A simple program to thin out the logfiles (older as three months in this case).
#   Can be run from the commandline and could be hung in systemd timers.
#   If there are log files you want to keep, you can put them in a subdirectory
#   (-maxdept 0)
# exit on error and a variable that is not set is an error
set -o errexit
set -o nounset


# Give an error on stderr
# And exit with the right error code
function giveError {
    echo "$1" >&2
    exit "$2"
}

function init {
    # Make sure the script is run by root
    if [[ $(id --user) -ne 0 ]] ; then
        giveError "${_scriptName} should be run as root" 1
    fi
    dirs=(cecil imaps root)
}

# To show the used space before and after thinning the log files
function showDuDirToClean {
    du -h ${dirToClean}
}
function mecho {
    echo ""
    echo "$1"
}
function necho {
    echo "$1"
}
function eecho {
    echo "$1"
}


tar cvf /tmp/backups.tar ~/BACKUPS     >/dev/null 2>&1;
mkdir -p                            ~/ARCHIVES
backup_file   /tmp/backups.tar      ~/ARCHIVES

dirToClean="/home/mestes/BACKUPS"
beforeMtime=$(( ($(date '+%s') - $(date -d '1 months ago' '+%s')) / 86400 ))
N=`find ${dirToClean}/*  -maxdepth 0 -type f -mtime "+${beforeMtime}" -print | wc -l`
mecho "$N files to clean"
mecho "Backup Window is $beforeMtime days"
mecho "Before"
du -h ${dirToClean}

find                            \
    ${dirToClean}/*             \
    -maxdepth 0                 \
    -type f                     \
    -mtime "+${beforeMtime}"    \
    -delete

echo ""
echo "After"
du -h ${dirToClean}
du -h ${dirToClean}
echo ""

#   dirs=(~/BACKUPS)
#   for subDir in "${dirs[@]}" ; do
#       dirToClean="/var/log/${subDir}"
#       showDuDirToClean
#       find                            \
#           ${dirToClean}/*             \
#           -maxdepth 0                 \
#           -type f                     \
#           -mtime "+${beforeMtime}"    \
#           -print
#       du -h ${dirToClean}
#       showDuDirToClean
#       echo ""
#   done

# But three monts is between 89 and 92 days, so I choose 92.
#   At least it shows how you can do things with date.
#   beforeMtime=$(( ($(date '+%s') - $(date -d '3 months ago' '+%s')) / 86400 ))
#   beforeMtime=92
