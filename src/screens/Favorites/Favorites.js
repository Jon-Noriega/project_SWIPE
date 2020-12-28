<script src="http://localhost:8097"></script>
import React, { useState, useEffect } from 'react'
import { SafeAreaView, View, ScrollView, Image, Text } from 'react-native'
import { FavoriteCard } from '../../components/index'
import styles from './Favorites.styles'

// import { makeStyles } from '@material-ui/core/styles';
// import GridList from '@material-ui/core/GridList';
// import GridListTile from '@material-ui/core/GridListTile';
// import GridListTileBar from '@material-ui/core/GridListTileBar';
// import IconButton from '@material-ui/core/IconButton';
// import StarBorderIcon from '@material-ui/icons/StarBorder';
// import { tileData } from '../../constants/index';

// const useStyles = makeStyles((theme) => ({
//     root: {
//         display: 'flex',
//         flexWrap: 'wrap',
//         justifyContent: 'space-around',
//         overflow: 'hidden',
//         backgroundColor: theme.palette.background.paper,
//     },
//     gridList: {
//         flexWrap: 'nowrap',
//         transform: 'translateZ(0)',
//     },
//     title: {
//         color: theme.palette.primary.light,
//     },
//     titleBar: {
//         background:
//         'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
//     },
// }));

const favoritesURL = "http://localhost:3000/friendships/"

const Favorites = () => {
    
    const [friendships, setFriendships] = useState([])

    useEffect( () => {
        fetch(favoritesURL)
            .then(response => response.json())
            .then(friendships => setFriendships(friendships))
    }, [])

    const renderFriendships = () => {
        return friendships.map(friendship => {
            return (
                <FavoriteCard friendship={friendship} key={friendship.id}/>
            )
        })
    }

    // const classes = useStyles();

    // console.log(tileData, "TEST 3 - TileDATA")    

    return (
        <SafeAreaView>
            <ScrollView>
                {renderFriendships()}
            </ScrollView>
        </SafeAreaView>

        // <View className={classes.root}>
        //     <GridList className={classes.gridList} cols={2.5}>
        //         {tileData.map((tile) => (
        //             <GridListTile key={tile.img}>
        //                 {/* <Image source={{ uri: tile.photo }} alt={tile.name} /> */}
        //                 <Image source={{ uri: tile.photo }} />
        //                 <GridListTileBar
        //                 title={tile.name}
        //                 classes={{
        //                     root: classes.titleBar,
        //                     title: classes.title,
        //                 }}
        //                 actionIcon={
        //                     <IconButton aria-label={`star ${tile.title}`}>
        //                         <StarBorderIcon className={classes.title} />
        //                     </IconButton>
        //                 }
        //                 />
        //             </GridListTile>
        //         ))}
        //     </GridList>
        // </View>
    )
}

export default Favorites
