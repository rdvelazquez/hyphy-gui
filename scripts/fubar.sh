HYPHY_DIR=$1
LIB_PATH=$HYPHY_DIR/res
BATCH_FILE_PATH=$HYPHY_DIR/res/TemplateBatchFiles/SelectionAnalyses/FUBAR.bf
DATA_PATH=$2
TREE_PATH=$3
GENETIC_CODE=$4
POSTERIORESTIMATIONMETHOD=${11}
GRID_POINTS=$5
CHAIN_LENGTH=$6
MCMC_CHAINS=$7
BURN_IN_SAMPLES=$8
SAMPLES_FROM_EACH_CHAIN=$9
CONC_DIRICHLET_PRIOR=${10}


# The if then statment is to deal with the different (reduced) menue options if variational bayes is selected as the posterior estimation method
if [ $POSTERIORESTIMATIONMETHOD -eq 3 ]
then
  (echo $GENETIC_CODE; echo $DATA_PATH; echo $TREE_PATH; echo $GRID_POINTS; echo $POSTERIORESTIMATIONMETHOD; echo $CONC_DIRICHLET_PRIOR;) | $HYPHY_DIR/HYPHYMP LIBPATH=$LIB_PATH $BATCH_FILE_PATH
else
  (echo $GENETIC_CODE; echo $DATA_PATH; echo $TREE_PATH; echo $GRID_POINTS; echo $POSTERIORESTIMATIONMETHOD; echo $MCMC_CHAINS; echo $CHAIN_LENGTH; echo $BURN_IN_SAMPLES; echo $SAMPLES_FROM_EACH_CHAIN; echo $CONC_DIRICHLET_PRIOR;) | $HYPHY_DIR/HYPHYMP LIBPATH=$LIB_PATH $BATCH_FILE_PATH
fi
