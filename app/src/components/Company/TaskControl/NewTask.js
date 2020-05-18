import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import API from '../../../Actions/API';

import Textbox from '../../Shared/Textbox';
import TextboxMini from '../../Shared/TextboxMini';
import Text from '../../Shared/Text';
import Button from '../../Shared/Button';
import Checkbox from '../../Shared/Checkbox';

import moment from 'moment';
moment().format();
moment.locale('fi');

const CompanyNewTask = ({ tasks, setTasks, JWTtoken, currentDate, days }) => {
    const [task, setTask] = useState({
        name: '',
        points: '',
        target: '',
        date: '',
        copystate: false,
        copyDays: '',
        forced: false,
    });
    useEffect(() => {
        setTask({ ...task, date: currentDate.format('YYYY-MM-DD').toString() });
    }, [currentDate]);

    const addnewtask = async () => {
        // setLoading(true);
        //let pvm = moment(new Date()).add(days, 'days');
        //pvm = pvm.format('YYYY-MM-DD').toString();
        const res = await API.addtask(task, JWTtoken);

        if (res.status === 200) {
            if (!res.data.error) {
                console.log(res.data);
                //  setLoading(false);
                console.log(tasks);
                setTasks([...tasks, res.data]);
                console.log(tasks);

                setTask({
                    name: '',
                    points: '',
                    target: '',
                    date: '',
                    copystate: false,
                    copyDays: '',
                    forced: false,
                });
            } else {
                console.log(res.data.error);
                //  setErrorText(res.data.error);
                // setTasks([]);
                //setLoading(false);
            }
            // setLoading(false);
        }
    };

    return (
        <>
            <Grid item xs={12}>
                <Textbox
                    type='text'
                    value={task.name}
                    placeholder='Tehtävä'
                    onChange={(e) => setTask({ ...task, name: e.target.value })}
                />
            </Grid>
            <Grid item xs={6}>
                <Textbox
                    type='text'
                    value={task.points}
                    placeholder='Pisteet'
                    onChange={(e) => setTask({ ...task, points: e.target.value })}
                />
            </Grid>
            <Grid item xs={6}>
                <Textbox
                    type='text'
                    value={task.target}
                    placeholder='Tavoite'
                    onChange={(e) => setTask({ ...task, target: e.target.value })}
                />
            </Grid>
            <Grid item xs={12}>
                <Grid container direction='row' justify='flex-start' alignItems='center' spacing={1}>
                    <Grid item xs='auto'>
                        <Checkbox
                            checked={task.copystate}
                            onChange={(e) => setTask({ ...task, copystate: e.target.checked })}
                        />
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
                        <Checkbox
                            checked={task.forced}
                            onChange={(e) => setTask({ ...task, forced: e.target.checked })}
                        />
                    </Grid>
                    <Grid item xs='auto'>
                        <Text size={10}>Määrittele tehtävä pakolliseksi </Text>
                    </Grid>
                    <Grid item xs={1}>
                        <img src={require('../../../Images/SVG/P_icon.svg')} />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Button color={1} onClick={() => addnewtask()}>
                    Tallenna
                </Button>
            </Grid>
        </>
    );
};

export default CompanyNewTask;
