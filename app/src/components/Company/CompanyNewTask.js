import React from 'react';
import Grid from '@material-ui/core/Grid';

import Textbox from '.././reuse/Textbox';
import TextboxMini from '.././reuse/TextboxMini';
import Text from '.././reuse/Text';
import Button from '.././reuse/Button';
import Checkbox from '.././reuse/Checkbox';

const CompanyNewTask = () => (
    <>
        <Grid item xs={12}>
            <Textbox type='text' placeholder='Tehtävä' />
        </Grid>
        <Grid item xs={6}>
            <Textbox type='text' placeholder='Pisteet' />
        </Grid>
        <Grid item xs={6}>
            <Textbox type='text' placeholder='Tavoite' />
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
                    <TextboxMini type='text' placeholder='' />
                </Grid>
                <Grid item xs='auto'>
                    <Text size={10}>päivälle </Text>
                </Grid>
            </Grid>
            <Grid container direction='row' justify='flex-start' alignItems='center' spacing={1}>
                <Grid item xs='auto'>
                    <Checkbox />
                </Grid>
                <Grid item xs='auto'>
                    <Text size={10}>Määrittele tehtävä pakolliseksi </Text>
                </Grid>
                <Grid item xs={1}>
                    <img src={require('../../Images/SVG/P_icon.svg')} />
                </Grid>
            </Grid>
        </Grid>
        <Grid item xs={12}>
            <Button color={1}>Tallenna</Button>
        </Grid>
    </>
);

export default CompanyNewTask;
