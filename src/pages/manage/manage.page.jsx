import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import ManageCardList from '../../components/manage-card-list/manage-card-list.component.jsx';
import Detail from '../detail/detail.page.jsx';
import AddPlantForm from '../../components/add-plant-form/add-plant-form.component.jsx';
import {Switch, Route, useHistory} from 'react-router-dom';
import QuickWaterButton from '../../components/quick-water-button/quick-water-button.component.jsx';
import WaterForm from '../../components/water-form/water-form.component.jsx';
import Button from '@material-ui/core/Button';

//Styles
const useStyles = makeStyles(theme => ({
  subContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  button: {
    marginTop: theme.spacing(2),
    width: '25ch',
  },
}));

export default function Manage(props) {
  const classes = useStyles();
  const {plants} = props; 

  const [quickWaterToggle, setQuickWaterToggle] = React.useState(false);

  const handleWaterToggle = () => {
    setQuickWaterToggle(!quickWaterToggle);
  };

  const {push} = useHistory();

  return (
    <div>
      <Switch>
        <Route exact path="/manage">
          <div className={classes.mainContainer}>
            <div className={classes.subContainer}>
              <Button className={classes.button} variant="contained" color="primary" onClick={() => {
                push('/manage/add')
              }}>
                Add Plant
              </Button>
              <QuickWaterButton
                handleWaterToggle={handleWaterToggle}
                quickWaterToggle={quickWaterToggle}
                styles={classes.button}
              />
            </div>
            <div>
              <ManageCardList plantData={plants} />
            </div>
          </div>
        </Route>
        <Route path="/manage/detail/:plantId">
          <Detail plantData={plants} />
        </Route>
        <Route path="/manage/add">
          <AddPlantForm />
        </Route>
        <Route path="/manage/water/:plantId">
          <WaterForm />
        </Route>
      </Switch>
    </div>
  );
}
