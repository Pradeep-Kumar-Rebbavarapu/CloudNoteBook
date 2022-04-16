import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { useContext } from 'react';
import Context from '../Context/Context';
import DeleteIcon from '@mui/icons-material/Delete';
import InfiniteScroll from 'react-infinite-scroll-component';
import Spinner from '../components/Spinner';
import UpdateModal from '../components/UpdateModal';
import { useEffect } from 'react';
const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function QueryPage() {
    const [expanded, setExpanded] = React.useState(false);
    let { AllNotes,DeleteNote,setvalue,GetAllNotes,nexturl,setuserallnotes,querynexturl,querynotes ,GetqueryNotes} = useContext(Context)



    const handleExpandClick = () => {
        setExpanded(!expanded);
    };


    useEffect(()=>{
        GetqueryNotes()
    },[])



    const fetchMoreData = () =>{
        GetqueryNotes()
        
    }


    console.log('queryall notes', querynotes);
    console.log(querynexturl)

    return (
        <div className="">
            
            <InfiniteScroll
          dataLength={querynotes.length}
          next={fetchMoreData}
          hasMore={querynexturl!=null}
          loader={<Spinner/>}
          id="infinite-scroll-bar"
          
        >
            <div className="container">
            </div>
            <div className="grid  grid-cols-4 justify-center">
            
            {querynotes.map((element) => {
                return (
                    <Card className="border-2 mx-auto my-3" sx={{ maxWidth: 345 }}>
                        <CardHeader
                            avatar={
                                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                    R
                                </Avatar>
                            }

                            title={element.title}
                            subheader={`-${element.datestamp}     -${element.timestamp}`} 
                            
                        />

                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                {element.desc}
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <IconButton aria-label="add to favorites" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={e=>{
                                // e.preventDefault()
                                setvalue(element.note_id)
                            }}>
                                <BorderColorIcon />
                            </IconButton>
                            <UpdateModal/>
                            <IconButton aria-label="share"  onClick={e=>{
                                DeleteNote(e,element.note_id)
                            }}>
                                <DeleteIcon value={element.note_id} name="delete" />
                                
                            </IconButton>

                        </CardActions>

                    </Card>
                )
            })}
            
            </div>
            
            </InfiniteScroll>
            
        </div>
    );
}
