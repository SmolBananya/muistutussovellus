import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import UserDailyTaskItem from './UserDailyTaskItem';
import Button from '../../Shared/Button';
import Text from '../../Shared/Text';

const DarkBG = styled(Grid)`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;
    background-color: rgba(0, 0, 0, 0.6);
`;
const TaskWindow = styled(Grid)`
    background-color: #ffffff;
    border: 2px solid #4daac9;
    border-radius: 12px;
    padding: 20px;
`;

const UserDailyTasks = () => {
    return (
        <DarkBG container direction='column' justify='center' alignItems='center'>
            <Grid container direction='row' justify='center' alignItems='center'>
                <TaskWindow item xs={10}>
                    <Grid item xs={12}>
                        <Text size={20} maincolor weight={500} align='center'>
                            Valitse päivän tehtävät
                        </Text>
                    </Grid>
                    <UserDailyTaskItem />
                    <UserDailyTaskItem />
                    <UserDailyTaskItem />
                    <UserDailyTaskItem />
                    <UserDailyTaskItem />
                    <UserDailyTaskItem />
                    <UserDailyTaskItem />
                    <UserDailyTaskItem />
                    <Grid item xs={12}>
                        <Button color={1}>Tallenna</Button>
                    </Grid>
                    <Text size={12} maincolor>
                        Valitse vielä 3 tehtävää
                    </Text>
                </TaskWindow>
            </Grid>
        </DarkBG>
    );
};

export default UserDailyTasks;
