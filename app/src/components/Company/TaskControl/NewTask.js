import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';

import Textbox from '../../Shared/Textbox';
import TextboxMini from '../../Shared/TextboxMini';
import Text from '../../Shared/Text';
import Button from '../../Shared/Button';
import Checkbox from '../../Shared/Checkbox';

const CompanyNewTask = () => {
    const [task, setTask] = useState({
        name: '',
        points: '',
        target: '',
        copyDays: '',
        forced: false,
    });

    return (
        <>
            <Grid item xs={12}>
                <Textbox
                    type='text'
                    placeholder='Tehtävä'
                    onChange={(e) => setTask({ ...task, name: e.target.value })}
                />
            </Grid>
            <Grid item xs={6}>
                <Textbox
                    type='text'
                    placeholder='Pisteet'
                    onChange={(e) => setTask({ ...task, points: e.target.value })}
                />
            </Grid>
            <Grid item xs={6}>
                <Textbox
                    type='text'
                    placeholder='Tavoite'
                    onChange={(e) => setTask({ ...task, target: e.target.value })}
                />
            </Grid>
            <Grid item xs={12}>
                <Grid container direction='row' justify='flex-start' alignItems='center' spacing={1}>
                    <Grid item xs='auto'>
                        <Checkbox />
                    </Grid>
                    <Grid item xs='auto'>
                        <Text size={10}>Kopio tehtävä seuraavalle </Text>
                    </Grid>
                    <Grid item xs={1} style={{ marginRight: '0.5em' }}>
                        <TextboxMini
                            type='text'
                            placeholder=''
                            onChange={(e) => setTask({ ...task, copyDays: e.target.value })}
                        />
                    </Grid>
                    <Grid item xs='auto'>
                        <Text size={10}>päivälle </Text>
                    </Grid>
                </Grid>
                <Grid container direction='row' justify='flex-start' alignItems='center' spacing={1}>
                    <Grid item xs='auto'>
                        <Checkbox onChange={(e) => setTask({ ...task, forced: e.target.checked })} />
                    </Grid>
                    <Grid item xs='auto'>
                        <Text size={10}>Määrittele tehtävä pakolliseksi </Text>
                    </Grid>
                    <Grid item xs={1}>
                        <img src={require('../../../Images/SVG/P_icon.svg')} />
                    </Grid>
                </Grid>
            </Grid>
            {console.log(task)}
            <Grid item xs={12}>
                <Button color={1}>Tallenna</Button>
            </Grid>
        </>
    );
};

export default CompanyNewTask;
