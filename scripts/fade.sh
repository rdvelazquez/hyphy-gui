HYPHY_DIR=$1
LIB_PATH=$HYPHY_DIR/res
BATCH_FILE_PATH=$HYPHY_DIR/res/TemplateBatchFiles/SelectionAnalyses/FADE.bf
DATA_PATH=$2
TREE_PATH=$3
SUBSTITUTION_MODEL=$4
POSTERIORESTIMATIONMETHOD=1
GRID_POINTS=$5
CHAIN_LENGTH=$6
MCMC_CHAINS=$7
BURN_IN_SAMPLES=$8
SAMPLES_FROM_EACH_CHAIN=$9
CONC_DIRICHLET_PRIOR=${10}
FG_OPTION_NOT_ALL_SELECTED=5
FG_OPTION_ALL_SELECTED=4

GETCOUNT=$HYPHY_DIR/../src/helpers/bfs/getAnnotatedCount.bf

output=$(echo $TREE_PATH | $HYPHY_DIR/HYPHYMP $GETCOUNT)
count=$(echo "${output: -1}")

if [ $count -eq 2 ]
then
  echo'then'
  (echo $DATA_PATH; echo $TREE_PATH; echo $FG_OPTION_NOT_ALL_SELECTED; echo $GRID_POINTS; echo $SUBSTITUTION_MODEL; echo $POSTERIORESTIMATIONMETHOD; echo $MCMC_CHAINS; echo $CHAIN_LENGTH; echo $BURN_IN_SAMPLES; echo $SAMPLES_FROM_EACH_CHAIN; echo $CONC_DIRICHLET_PRIOR;) | $HYPHY_DIR/HYPHYMP LIBPATH=$LIB_PATH $BATCH_FILE_PATH
else
  (echo $DATA_PATH; echo $TREE_PATH; echo $FG_OPTION_ALL_SELECTED; echo $GRID_POINTS; echo $SUBSTITUTION_MODEL; echo $POSTERIORESTIMATIONMETHOD; echo $MCMC_CHAINS; echo $CHAIN_LENGTH; echo $BURN_IN_SAMPLES; echo $SAMPLES_FROM_EACH_CHAIN; echo $CONC_DIRICHLET_PRIOR;) | $HYPHY_DIR/HYPHYMP LIBPATH=$LIB_PATH $BATCH_FILE_PATH
fi
