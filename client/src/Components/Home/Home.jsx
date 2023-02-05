import Navbar from './Navbar'
import Banner from './Banner'
import { styled, Box } from "@mui/material"
import { useEffect } from 'react'
import { getProducts } from '../../redux/actions/productActions'
import { useDispatch, useSelector } from 'react-redux'
import Slide from './Slide'
import MidSlide from './MidSlide'
import MidSection from './MidSection'







const Component = styled(Box)`
padding:10px;
background:#F2F2F2;
`
// as we land our to oub website we want  as soon as our api call made this is possible in react life cycle method  but it is used with class base components not functional based component so a replacement of component did mount is react hook thai is useeffect() in functional based component.
// react hooks useeffect  is used as component did mount , component did update and component will unmount;
const Home = () => {
    const dispatch = useDispatch();
    const getproduct = useSelector(state => state.getProducts);


    // destructing of data
    const { products } = getproduct;
    //console.log("product in redux store",products);


    useEffect(() => {

        dispatch(getProducts());

    }, [dispatch])




    return (
        <>
            <Navbar />
            <Component>
                <Banner />
                <MidSlide products={products} />
                <MidSection />
                <Slide
                    data={products}
                    title='Discounts for You'
                    timer={false}
                    multi={true}
                />
                <Slide
                    data={products}
                    title='Suggested Items'
                    timer={false}
                    multi={true}
                />
                <Slide
                    data={products}
                    title='Top Selection'
                    timer={false}
                    multi={true}
                />
                <Slide
                    data={products}
                    title='Recommended Items'
                    timer={false}
                    multi={true}
                />

            </Component>

        </>
    );
}
export default Home;