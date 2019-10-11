BRANCH=$GITHUB_HEAD_REF; if [ -z "$BRANCH" ]; then BRANCH=$GITHUB_REF; fi;

BRANCH=$(echo "$BRANCH" | tr / _ | tr -d \[:space:\] | tr -cs \[:alnum:\] -);
BRANCH=$(echo "${BRANCH/'refs-heads-'}");

echo ::set-env name=action_state::yellow
echo ::set-env name=BRANCH::$BRANCH
