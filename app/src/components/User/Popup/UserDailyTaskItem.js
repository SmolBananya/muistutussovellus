import React from 'react';
import Grid from '@material-ui/core/Grid';
import Text from '../../Shared/Text';
import Checkbox from '../../Shared/Checkbox';

const UserDailyTaskItem = (props) => {
    return (
        <Grid container direction='row' justify='flex-start' alignItems='center'>
            <Grid item xs='auto'>
                <Checkbox checked='' onChange='{}' />
            </Grid>
            <Grid item xs='auto'>
                <Text size={12}>Olen tänään soittanut 5 kertaa </Text>
            </Grid>
        </Grid>
    );
};

export default UserDailyTaskItem;
