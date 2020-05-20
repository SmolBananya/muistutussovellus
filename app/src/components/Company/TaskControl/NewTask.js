import React, { useState, useEffect, useContext } from 'react';
import { TaskControlContext } from '../../../Context/TaskControlContext';
import Grid from '@material-ui/core/Grid';
import API from '../../../Actions/API';
import Textbox from '../../Shared/Textbox';
import TextboxMini from '../../Shared/TextboxMini';
import Text from '../../Shared/Text';
import Button from '../../Shared/Button';
import Checkbox from '../../Shared/Checkbox';
import moment from 'moment';
import { UserContext } from '../../../Context/UserContext';

const CompanyNewTask = () => {
    const { TASKLIST, DATE } = useContext(TaskControlContext);
    const [taskList, setTaskList] = TASKLIST;
    const [date, setDate] = DATE;
    const [user, setUser] = useContext(UserContext);

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
        setTask({ ...task, date: moment(date).format('YYYY-MM-DD').toString() });
    }, [date]);

    const addnewtask = async () => {
        const res = await API.addtask(task, user.JWTtoken);

        if (res.status === 200) {
            if (!res.data.error) {
                setTaskList([...taskList, res.data]);
                setTask({ ...task, name: '', points: '', target: '', copystate: false, copyDays: '', forced: false });
            } else {
                console.log(res.data.error);
            }
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
                        <Text size={10}>Kopio myös seuraavalle </Text>
                    </Grid>
                    <Grid item xs={1} style={{ marginRight: '0.5em' }}>
                        <TextboxMini
                            type='text'
                            value={task.copyDays}
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
