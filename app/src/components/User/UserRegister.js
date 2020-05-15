import React from 'react';
import Grid from '@material-ui/core/Grid';

import Toolbar from '../Toolbar';
import Main from '../reuse/Main';
import Textbox from '../reuse/Textbox';
import Button from '../reuse/Button';
import Text from '../reuse/Text';
import TextboxLargeNumber from '../reuse/TextboxLargeNumber';

const UserRegister = () => {
    return (
        <>
            <Toolbar backarrowaction='login' value='Luo käyttäjätunnus' />
            <Main container direction='row' justify='center' alignItems='center'>
                <Grid item xs={11}>
                    <Grid item xs={12}>
                        <Textbox type='text' placeholder='Etunimi' />
                    </Grid>
                    <Grid item xs={12}>
                        <Textbox type='text' placeholder='Sukunimi' />
                    </Grid>
                    <Grid item xs={12}>
                        <Textbox type='text' placeholder='Sähköposti' />
                    </Grid>
                    <Grid item xs={12}>
                        <Textbox type='password' placeholder='Salasana' />
                    </Grid>

                    <Grid container direction='row' justify='center' alignItems='center' spacing={2}>
                        <Grid item xs={12}>
                            <Text size={12}>Rekisteröintikoodi</Text>
                        </Grid>
                        <Grid item xs={2}>
                            <TextboxLargeNumber type='text' size={24} weight={700} maincolor />
                        </Grid>
                        <Grid item xs={2}>
                            <TextboxLargeNumber type='text' size={24} weight={700} maincolor />
                        </Grid>
                        <Grid item xs={2}>
                            <TextboxLargeNumber type='text' size={24} weight={700} maincolor />
                        </Grid>
                        <Grid item xs={2}>
                            <TextboxLargeNumber type='text' size={24} weight={700} maincolor />
                        </Grid>
                        <Grid item xs={2}>
                            <TextboxLargeNumber type='text' size={24} weight={700} maincolor />
                        </Grid>
                    </Grid>

                    <Grid container direction='row' justify='center' alignItems='center' spacing={2}>
                        <Grid item xs={12}>
                            <Button color={1}>Jatka</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Main>
        </>
    );
};

export default UserRegister;
