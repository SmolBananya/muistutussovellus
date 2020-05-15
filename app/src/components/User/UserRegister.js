import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { Redirect } from 'react-router-dom';

import Toolbar from '../Toolbar';
import Main from '../reuse/Main';
import Textbox from '../reuse/Textbox';
import Button from '../reuse/Button';
import Text from '../reuse/Text';
import TextboxLargeNumber from '../reuse/TextboxLargeNumber';
import UserRegisterChar from './UserRegisterChar';

const UserRegister = (props) => {
    const [showCharacterSelection, setShowCharacterSelection] = useState(false);
    const [data, setData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        c1: '',
        c2: '',
        c3: '',
        c4: '',
        c5: '',
        registercode: '',
        character: '10',
    });
    return (
        <>
            {showCharacterSelection ? (
                <Toolbar setShowCharacterSelection={setShowCharacterSelection} value='Valitse pelihahmo' />
            ) : (
                <Toolbar backarrowaction='login' value='Luo käyttäjätunnus' />
            )}
            {showCharacterSelection ? (
                <UserRegisterChar data={data} setData={setData} user={props.user} setUser={props.setUser} />
            ) : (
                <Main container direction='row' justify='center' alignItems='center'>
                    <Grid item xs={11}>
                        <Grid item xs={12}>
                            <Textbox
                                autoFocus
                                type='text'
                                placeholder='Etunimi'
                                value={data.firstname}
                                onChange={(e) => setData({ ...data, firstname: e.target.value })}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Textbox
                                type='text'
                                placeholder='Sukunimi'
                                value={data.lastname}
                                onChange={(e) => setData({ ...data, lastname: e.target.value })}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Textbox
                                type='text'
                                placeholder='Sähköposti'
                                value={data.email}
                                onChange={(e) => setData({ ...data, email: e.target.value })}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Textbox
                                type='password'
                                placeholder='Salasana'
                                value={data.password}
                                onChange={(e) => setData({ ...data, password: e.target.value })}
                            />
                        </Grid>

                        <Grid container direction='row' justify='center' alignItems='center' spacing={2}>
                            <Grid item xs={12}>
                                <Text size={12}>Rekisteröintikoodi</Text>
                            </Grid>
                            <Grid item xs={2}>
                                <TextboxLargeNumber
                                    type='text'
                                    maxLength='1'
                                    size={24}
                                    weight={700}
                                    maincolor
                                    value={data.c1}
                                    onChange={(e) => setData({ ...data, c1: e.target.value })}
                                />
                            </Grid>
                            <Grid item xs={2}>
                                <TextboxLargeNumber
                                    type='text'
                                    maxLength='1'
                                    size={24}
                                    weight={700}
                                    maincolor
                                    value={data.c2}
                                    onChange={(e) => setData({ ...data, c2: e.target.value })}
                                />
                            </Grid>
                            <Grid item xs={2}>
                                <TextboxLargeNumber
                                    type='text'
                                    maxLength='1'
                                    size={24}
                                    weight={700}
                                    maincolor
                                    value={data.c3}
                                    onChange={(e) => setData({ ...data, c3: e.target.value })}
                                />
                            </Grid>
                            <Grid item xs={2}>
                                <TextboxLargeNumber
                                    type='text'
                                    maxLength='1'
                                    size={24}
                                    weight={700}
                                    maincolor
                                    value={data.c4}
                                    onChange={(e) => setData({ ...data, c4: e.target.value })}
                                />
                            </Grid>
                            <Grid item xs={2}>
                                <TextboxLargeNumber
                                    type='text'
                                    maxLength='1'
                                    size={24}
                                    weight={700}
                                    maincolor
                                    value={data.c5}
                                    onChange={(e) => setData({ ...data, c5: e.target.value })}
                                />
                            </Grid>
                        </Grid>

                        <Grid container direction='row' justify='center' alignItems='center' spacing={2}>
                            <Grid item xs={12}>
                                <Button
                                    color={1}
                                    onClick={() => {
                                        setData({
                                            ...data,
                                            registercode: data.c1.concat(data.c2, data.c3, data.c4, data.c5),
                                        });
                                        console.log(data);
                                        setShowCharacterSelection(true);
                                    }}
                                >
                                    Jatka
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Main>
            )}
        </>
    );
};

export default UserRegister;
