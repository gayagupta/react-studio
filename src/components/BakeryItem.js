import { Button, Card, CardContent, CardMedia, Typography, Box} from "@mui/material"

// TODO: create a component that displays a single bakery item
export default function BakeryItem(props) { 
    return (
        <Card sx={{ 
            width: 1, 
            height: 1,
            borderRadius: 20,
            }}>
            <Box sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                height: '100%',
                }}>
            <CardMedia 
                component='img'
                image={props.item.image}
                alt={"baked good"}
            />
            <Box
            sx={{ 
                    display: 'flex', 
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    height: '100%',
                    gap: '1rem',
                    padding: '1rem 1rem'
                }}
                >
                    <Box>
                        <Typography align='center'
                        sx={{ 
                            align: 'center',
                            fontSize: 'h6.fontSize', 
                            fontWeight: 'bold',
                            fontFamily: 'Monospace',
                            }}
                        >
                        {props.item.name}
                        </Typography>
                        <Typography align='center'>
                            {props.item.description}
                        </Typography>
                    </Box>
                    <Box sx={{ 
                        display: 'flex', 
                        flexDirection: 'column',
                        justifyContent: 'space-between', 
                        alignItems: 'center',
                        gap: '1rem',
                        }}
                    >
                        <Typography>
                            {'$' + props.item.price}
                        </Typography>
                        <Button 
                            style={{
                                backgroundColor: "#21b6ae",
                                borderRadius: 35,
                            }}
                            variant="contained" 
                            disableElevation
                            onClick={() => props.updateCart(props.index)}
                        >
                            Add to cart
                        </Button>
                    </Box>   
                </Box>  
            </Box>
        </Card>
    )
}