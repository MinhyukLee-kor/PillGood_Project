import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';


export default function CheckboxListSecondary() {
    const [checked, setChecked] = React.useState([1]);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    return (
        <div>
            <List dense sx={{ width: '200px', maxWidth: 360, bgcolor: 'background.paper' }}>
                <ListItemText
                    sx={{ my: 0 }}
                    primary="아침"
                    primaryTypographyProps={{
                        fontSize: 20,
                        fontWeight: 'medium',
                        letterSpacing: 0,
                    }}
                />
                {['비타민D', '오메가3', '루테인'].map((value) => {
                    const labelId = `checkbox-list-secondary-label-${value}`;
                    return (
                        <ListItem
                            key={value}
                            secondaryAction={
                                <Checkbox
                                    edge="end"
                                    onChange={handleToggle(value)}
                                    checked={checked.indexOf(value) !== -1}
                                    inputProps={{ 'aria-labelledby': labelId }}
                                />
                            }
                            disablePadding
                        >
                            <ListItemButton>

                                <ListItemText id={labelId} primary={` ${value}`} />
                            </ListItemButton>
                        </ListItem>
                    );
                })}
            </List>

        </div>
    );
}