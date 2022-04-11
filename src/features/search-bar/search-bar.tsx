import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import {useAppDispatch} from '../../app/hooks';
import {setCityName} from '../weather-data/weather-data-slice';
import {InputAdornment} from '@material-ui/core';
import './search-bar.css';

export function SearchBar() {
    const dispatch = useAppDispatch();

    console.log('ahhhhsdjfkh');
    console.log('making handleKeyDown be moved to a different line');

    const handleKeyDown = (event: any) => {
        if (event.key === 'Enter') {
            dispatch(setCityName(event.target.value));
        }
    }

    return (
        <div>
            <TextField id="search-bar"
                       label="Search city"
                       variant="outlined"
                       className="search-input"
                       onKeyDown={handleKeyDown}
                       InputProps={{
                           endAdornment: (
                               <InputAdornment position="end">
                                   <SearchIcon/>
                               </InputAdornment>
                           ),
                       }}/>
        </div>
    );
}
