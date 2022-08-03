import icons from './icons.module.scss';

export const SearchIcon = ({ mode }) => {
    return (
        <svg className={mode === 'light' ? icons.svg__light : icons.svg__dark} xmlns="http://www.w3.org/2000/svg" width="20.414" height="20.414" viewBox="0 0 20.414 20.414">
            <g id="search" transform="translate(-2 -2)">
                <circle id="Ellipse_153" data-name="Ellipse 153" cx="8" cy="8" r="8" transform="translate(3 3)" fill="none" stroke="#172026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <line id="Line_547" data-name="Line 547" x1="4.35" y1="4.35" transform="translate(16.65 16.65)" fill="none" stroke="#172026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
            </g>
        </svg>
    );
}

export const ActivityIcon = ({ mode }) => {
    return (
        <svg className={mode === 'light' ? icons.svg__light : icons.svg__dark} xmlns="http://www.w3.org/2000/svg" width="22" height="20" viewBox="0 0 22 20">
            <path id="activity" d="M22,12H18l-3,9L9,3,6,12H2" transform="translate(-1 -2)" fill="none" stroke="#172026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
        </svg>

    );
}

export const AirplayIcon = ({ mode }) => {
    return (
        <svg className={mode === 'light' ? icons.svg__light : icons.svg__dark} xmlns="http://www.w3.org/2000/svg" width="22" height="20" viewBox="0 0 22 20">
            <g id="airplay" transform="translate(-1 -2)">
                <path id="Path_37867" data-name="Path 37867" d="M5,17H4a2,2,0,0,1-2-2V5A2,2,0,0,1,4,3H20a2,2,0,0,1,2,2V15a2,2,0,0,1-2,2H19" fill="none" stroke="#172026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path id="Path_37868" data-name="Path 37868" d="M12,15l5,6H7Z" fill="none" stroke="#172026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
            </g>
        </svg>

    );
}

export const UserIcon = ({ mode }) => {
    return (
        <svg className={mode === 'light' ? icons.svg__light : icons.svg__dark} xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20">
            <g id="user" transform="translate(-3 -2)">
                <path id="Path_38138" data-name="Path 38138" d="M20,21V19a4,4,0,0,0-4-4H8a4,4,0,0,0-4,4v2" fill="none" stroke="#172026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <circle id="Ellipse_176" data-name="Ellipse 176" cx="4" cy="4" r="4" transform="translate(8 3)" fill="none" stroke="#172026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
            </g>
        </svg>
    );
}

export const ShoppingCartIcon = ({ mode }) => {
    return (
        <svg className={mode === 'light' ? icons.svg__light : icons.svg__dark
        } xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="0 0 20 22" >
            <g id="shopping-bag" transform="translate(-2 -1)">
                <path id="Path_38093" data-name="Path 38093" d="M6,2,3,6V20a2,2,0,0,0,2,2H19a2,2,0,0,0,2-2V6L18,2Z" fill="none" stroke="#172026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <line id="Line_555" data-name="Line 555" x2="18" transform="translate(3 6)" fill="none" stroke="#172026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path id="Path_38094" data-name="Path 38094" d="M16,10a4,4,0,0,1-8,0" fill="none" stroke="#172026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
            </g>
        </svg >

    )
}

export const MapPinIcon = ({ mode }) => {
    return (
        <svg className={mode === 'light' ? icons.svg__light : icons.svg__dark} xmlns="http://www.w3.org/2000/svg" width="20" height="24" viewBox="0 0 20 24">
            <g id="map-pin" transform="translate(-2)">
                <path id="Path_38027" data-name="Path 38027" d="M21,10c0,7-9,13-9,13S3,17,3,10a9,9,0,1,1,18,0Z" fill="none" stroke="#172026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <circle id="Ellipse_132" data-name="Ellipse 132" cx="3" cy="3" r="3" transform="translate(9 7)" fill="none" stroke="#172026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
            </g>
        </svg>
    )
}

export const InstagramIcon = ({ mode }) => {
    return (
        <svg className={mode === 'light' ? icons.svg__light : icons.svg__dark} xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
            <g id="instagram" transform="translate(-1 -1)">
                <rect id="Rectangle_1587" data-name="Rectangle 1587" width="20" height="20" rx="5" transform="translate(2 2)" fill="none" stroke="#172026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path id="Path_38012" data-name="Path 38012" d="M16,11.37A4,4,0,1,1,12.63,8,4,4,0,0,1,16,11.37Z" fill="none" stroke="#172026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <line id="Line_475" data-name="Line 475" x2="0.01" transform="translate(17.5 6.5)" fill="none" stroke="#172026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
            </g>
        </svg>
    )
}

export const FacebookIcon = ({ mode }) => {
    return (
        <svg className={mode === 'light' ? icons.svg__light : icons.svg__dark} xmlns="http://www.w3.org/2000/svg" width="13" height="22" viewBox="0 0 13 22">
            <path id="facebook" d="M18,2H15a5,5,0,0,0-5,5v3H7v4h3v8h4V14h3l1-4H14V7a1,1,0,0,1,1-1h3Z" transform="translate(-6 -1)" fill="none" stroke="#172026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
        </svg>
    )
}

export const TwitterIcon = ({ mode }) => {
    return (
        <svg className={mode === 'light' ? icons.svg__light : icons.svg__dark} xmlns="http://www.w3.org/2000/svg" width="24" height="20.142" viewBox="0 0 24 20.142">
            <path id="twitter" d="M23,3a10.9,10.9,0,0,1-3.14,1.53,4.48,4.48,0,0,0-7.86,3v1A10.66,10.66,0,0,1,3,4s-4,9,5,13a11.64,11.64,0,0,1-7,2c9,5,20,0,20-11.5a4.5,4.5,0,0,0-.08-.83A7.72,7.72,0,0,0,23,3Z" transform="translate(0 -1.912)" fill="none" stroke="#172026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
        </svg>
    )
}

export const HeartIcon = ({ mode }) => {
    return (
        <svg className={mode === 'light' ? icons.svg__light : icons.svg__dark} xmlns="http://www.w3.org/2000/svg" width="22.903" height="20.232" viewBox="0 0 22.903 20.232">
            <path id="heart" d="M20.84,4.61a5.5,5.5,0,0,0-7.78,0L12,5.67,10.94,4.61a5.5,5.5,0,0,0-7.78,7.78l1.06,1.06L12,21.23l7.78-7.78,1.06-1.06a5.5,5.5,0,0,0,0-7.78Z" transform="translate(-0.549 -1.998)" fill="none" stroke="#172026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
        </svg>

    )
}

export const ChevronLeftIcon = ({ mode }) => {
    return (
        <svg className={mode === 'light' ? icons.svg__light : icons.svg__dark} xmlns="http://www.w3.org/2000/svg" width="8.414" height="14.828" viewBox="0 0 8.414 14.828">
            <path id="chevron-left" d="M15,18,9,12l6-6" transform="translate(-8 -4.586)" fill="none" stroke="#172026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
        </svg>
    )
}

export const ChevronRightIcon = ({ mode }) => {
    return (
        <svg className={mode === 'light' ? icons.svg__light : icons.svg__dark} xmlns="http://www.w3.org/2000/svg" width="8.414" height="14.828" viewBox="0 0 8.414 14.828">
            <path id="chevron-right" d="M9,18l6-6L9,6" transform="translate(-7.586 -4.586)" fill="none" stroke="#172026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
        </svg>
    )
}

export const ChevronDownIcon = ({ mode }) => {
    return (
        <svg className={mode === 'light' ? icons.svg__light : icons.svg__dark} xmlns="http://www.w3.org/2000/svg" width="14.828" height="8.414" viewBox="0 0 14.828 8.414">
            <path id="chevron-down" d="M6,9l6,6,6-6" transform="translate(-4.586 -7.586)" fill="none" stroke="#172026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
        </svg>
    )
}

export const EditIcon = ({ mode }) => {
    return (
        <svg className={mode === 'light' ? icons.svg__light : icons.svg__dark} xmlns="http://www.w3.org/2000/svg" width="22.311" height="22.121" viewBox="0 0 22.311 22.121">
            <g id="edit" transform="translate(-1 -0.879)">
                <path id="Path_37969" data-name="Path 37969" d="M11,4H4A2,2,0,0,0,2,6V20a2,2,0,0,0,2,2H18a2,2,0,0,0,2-2V13" fill="none" stroke="#172026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path id="Path_37970" data-name="Path 37970" d="M18.5,2.5a2.121,2.121,0,0,1,3,3L12,15,8,16l1-4Z" fill="none" stroke="#172026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
            </g>
        </svg>
    )
}

export const ShareIcon = ({ mode }) => {
    return (
        <svg className={mode === 'light' ? icons.svg__light : icons.svg__dark} xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="0 0 20 22">
            <g id="share-2" transform="translate(-2 -1)">
                <circle id="Ellipse_155" data-name="Ellipse 155" cx="3" cy="3" r="3" transform="translate(15 2)" fill="none" stroke="#172026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <circle id="Ellipse_156" data-name="Ellipse 156" cx="3" cy="3" r="3" transform="translate(3 9)" fill="none" stroke="#172026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <circle id="Ellipse_157" data-name="Ellipse 157" cx="3" cy="3" r="3" transform="translate(15 16)" fill="none" stroke="#172026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <line id="Line_551" data-name="Line 551" x2="6.83" y2="3.98" transform="translate(8.59 13.51)" fill="none" stroke="#172026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <line id="Line_552" data-name="Line 552" x1="6.82" y2="3.98" transform="translate(8.59 6.51)" fill="none" stroke="#172026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
            </g>
        </svg>
    )
}

export const ScissorsIcon = ({ mode }) => {
    return (
        <svg className={mode === 'light' ? icons.svg__light : icons.svg__dark} xmlns="http://www.w3.org/2000/svg" width="19.414" height="20" viewBox="0 0 19.414 20">
            <g id="scissors" transform="translate(-2 -2)">
                <circle id="Ellipse_151" data-name="Ellipse 151" cx="3" cy="3" r="3" transform="translate(3 3)" fill="none" stroke="#172026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <circle id="Ellipse_152" data-name="Ellipse 152" cx="3" cy="3" r="3" transform="translate(3 15)" fill="none" stroke="#172026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <line id="Line_544" data-name="Line 544" x1="11.88" y2="11.88" transform="translate(8.12 4)" fill="none" stroke="#172026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <line id="Line_545" data-name="Line 545" x2="5.53" y2="5.52" transform="translate(14.47 14.48)" fill="none" stroke="#172026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <line id="Line_546" data-name="Line 546" x2="3.88" y2="3.88" transform="translate(8.12 8.12)" fill="none" stroke="#172026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
            </g>
        </svg>

    )
}

export const RefreshCwIcon = ({ mode }) => {
    return (
        <svg className={mode === 'light' ? icons.svg__light : icons.svg__dark} xmlns="http://www.w3.org/2000/svg" width="24.827" height="20.081" viewBox="0 0 24.827 20.081">
            <g id="refresh-cw" transform="translate(0.414 -1.959)">
                <path id="Path_38069" data-name="Path 38069" d="M23,4v6H17" fill="none" stroke="#172026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path id="Path_38070" data-name="Path 38070" d="M1,20V14H7" fill="none" stroke="#172026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path id="Path_38071" data-name="Path 38071" d="M3.51,9A9,9,0,0,1,18.36,5.64L23,10M1,14l4.64,4.36A9,9,0,0,0,20.49,15" fill="none" stroke="#172026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
            </g>
        </svg>
    )
}

export const PlayIcon = ({ mode }) => {
    return (
        <svg className={mode === 'light' ? icons.svg__light : icons.svg__dark} xmlns="http://www.w3.org/2000/svg" width="16" height="20" viewBox="0 0 16 20">
            <path id="play" d="M5,3l14,9L5,21Z" transform="translate(-4 -2)" fill="none" stroke="#172026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
        </svg>

    )
}

export const PieChartIcon = ({ mode }) => {
    return (
        <svg className={mode === 'light' ? icons.svg__light : icons.svg__dark} xmlns="http://www.w3.org/2000/svg" width="22.008" height="22.002" viewBox="0 0 22.008 22.002">
            <g id="pie-chart" transform="translate(-0.992 -1)">
                <path id="Path_38057" data-name="Path 38057" d="M21.21,15.89A10,10,0,1,1,8,2.83" fill="none" stroke="#172026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path id="Path_38058" data-name="Path 38058" d="M22,12A10,10,0,0,0,12,2V12Z" fill="none" stroke="#172026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
            </g>
        </svg>
    )
}

export const EditIcon2 = ({ mode }) => {
    return (
        <svg className={mode === 'light' ? icons.svg__light : icons.svg__dark} xmlns="http://www.w3.org/2000/svg" width="22.061" height="21.828" viewBox="0 0 22.061 21.828">
            <path id="edit-2" d="M17,3a2.828,2.828,0,0,1,4,4L7.5,20.5,2,22l1.5-5.5Z" transform="translate(-1 -1.172)" fill="none" stroke="#172026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
        </svg>

    )
}

export const TrashIcon = ({ mode }) => {
    return (
        <svg className={mode === 'light' ? icons.svg__light : icons.svg__dark} xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="0 0 20 22">
            <g id="trash-2" transform="translate(-2 -1)">
                <path id="Path_38115" data-name="Path 38115" d="M3,6H21" fill="none" stroke="#172026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path id="Path_38116" data-name="Path 38116" d="M19,6V20a2,2,0,0,1-2,2H7a2,2,0,0,1-2-2V6M8,6V4a2,2,0,0,1,2-2h4a2,2,0,0,1,2,2V6" fill="none" stroke="#172026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <line id="Line_599" data-name="Line 599" y2="6" transform="translate(10 11)" fill="none" stroke="#172026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <line id="Line_600" data-name="Line 600" y2="6" transform="translate(14 11)" fill="none" stroke="#172026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
            </g>
        </svg>

    )
}

export const PlusCircleIcon = ({ mode }) => {
    return (
        <svg className={mode === 'light' ? icons.svg__light : icons.svg__dark} xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
            <g id="plus-circle" transform="translate(-1 -1)">
                <circle id="Ellipse_148" data-name="Ellipse 148" cx="10" cy="10" r="10" transform="translate(2 2)" fill="none" stroke="#172026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <line id="Line_537" data-name="Line 537" y2="8" transform="translate(12 8)" fill="none" stroke="#172026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <line id="Line_538" data-name="Line 538" x2="8" transform="translate(8 12)" fill="none" stroke="#172026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
            </g>
        </svg>
    )
}

export const MinusCircleIcon = ({ mode }) => {
    return (
        <svg className={mode === 'light' ? icons.svg__light : icons.svg__dark} xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
            <g id="minus-circle" transform="translate(-1 -1)">
                <circle id="Ellipse_134" data-name="Ellipse 134" cx="10" cy="10" r="10" transform="translate(2 2)" fill="none" stroke="#172026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <line id="Line_520" data-name="Line 520" x2="8" transform="translate(8 12)" fill="none" stroke="#172026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
            </g>
        </svg>
    )
}

export const LockIcon = ({ mode }) => {
    return (
        <svg className={mode === 'light' ? icons.svg__light : icons.svg__dark} xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="0 0 20 22">
            <g id="lock" transform="translate(-2 -1)">
                <rect id="Rectangle_1590" data-name="Rectangle 1590" width="18" height="11" rx="2" transform="translate(3 11)" fill="none" stroke="#172026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path id="Path_38020" data-name="Path 38020" d="M7,11V7A5,5,0,1,1,17,7v4" fill="none" stroke="#172026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
            </g>
        </svg>
    )
}

export const SquareIcon = ({ mode }) => {
    return (
        <svg className={mode === 'light' ? icons.svg__light : icons.svg__dark} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
            <rect id="square" width="18" height="18" rx="2" transform="translate(1 1)" fill="none" stroke="#172026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
        </svg>

    )
}

export const CheckIcon = ({ mode }) => {
    return (
        <svg className={mode === 'light' ? icons.svg__light : icons.svg__dark} xmlns="http://www.w3.org/2000/svg" width="18.828" height="13.414" viewBox="0 0 18.828 13.414">
            <path id="check" d="M20,6,9,17,4,12" transform="translate(-2.586 -4.586)" fill="none" stroke="#172026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
        </svg>
    )
}

export const LoaderIcon = ({ mode }) => {
    return (
        <svg className={mode === 'light' ? icons.svg__light : icons.svg__dark} xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
            <g id="loader" transform="translate(-1 -1)">
                <line id="Line_493" data-name="Line 493" y2="4" transform="translate(12 2)" fill="none" stroke="#172026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <line id="Line_494" data-name="Line 494" y2="4" transform="translate(12 18)" fill="none" stroke="#172026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <line id="Line_495" data-name="Line 495" x2="2.83" y2="2.83" transform="translate(4.93 4.93)" fill="none" stroke="#172026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <line id="Line_496" data-name="Line 496" x2="2.83" y2="2.83" transform="translate(16.24 16.24)" fill="none" stroke="#172026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <line id="Line_497" data-name="Line 497" x2="4" transform="translate(2 12)" fill="none" stroke="#172026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <line id="Line_498" data-name="Line 498" x2="4" transform="translate(18 12)" fill="none" stroke="#172026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <line id="Line_499" data-name="Line 499" y1="2.83" x2="2.83" transform="translate(4.93 16.24)" fill="none" stroke="#172026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <line id="Line_500" data-name="Line 500" y1="2.83" x2="2.83" transform="translate(16.24 4.93)" fill="none" stroke="#172026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
            </g>
        </svg>
    )
}

export const PaypalIcon = ({ mode }) => {
    return (
        <svg className={mode === 'light' ? icons.svg__light : icons.svg__dark} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 124 33" enable-background="new 0 0 124 33">
            <path fill="#253B80" d="M46.211,6.749h-6.839c-0.468,0-0.866,0.34-0.939,0.802l-2.766,17.537c-0.055,0.346,0.213,0.658,0.564,0.658
	h3.265c0.468,0,0.866-0.34,0.939-0.803l0.746-4.73c0.072-0.463,0.471-0.803,0.938-0.803h2.165c4.505,0,7.105-2.18,7.784-6.5
	c0.306-1.89,0.013-3.375-0.872-4.415C50.224,7.353,48.5,6.749,46.211,6.749z M47,13.154c-0.374,2.454-2.249,2.454-4.062,2.454
	h-1.032l0.724-4.583c0.043-0.277,0.283-0.481,0.563-0.481h0.473c1.235,0,2.4,0,3.002,0.704C47.027,11.668,47.137,12.292,47,13.154z"
            />
            <path fill="#253B80" d="M66.654,13.075h-3.275c-0.279,0-0.52,0.204-0.563,0.481l-0.145,0.916l-0.229-0.332
	c-0.709-1.029-2.29-1.373-3.868-1.373c-3.619,0-6.71,2.741-7.312,6.586c-0.313,1.918,0.132,3.752,1.22,5.031
	c0.998,1.176,2.426,1.666,4.125,1.666c2.916,0,4.533-1.875,4.533-1.875l-0.146,0.91c-0.055,0.348,0.213,0.66,0.562,0.66h2.95
	c0.469,0,0.865-0.34,0.939-0.803l1.77-11.209C67.271,13.388,67.004,13.075,66.654,13.075z M62.089,19.449
	c-0.316,1.871-1.801,3.127-3.695,3.127c-0.951,0-1.711-0.305-2.199-0.883c-0.484-0.574-0.668-1.391-0.514-2.301
	c0.295-1.855,1.805-3.152,3.67-3.152c0.93,0,1.686,0.309,2.184,0.892C62.034,17.721,62.232,18.543,62.089,19.449z"/>
            <path fill="#253B80" d="M84.096,13.075h-3.291c-0.314,0-0.609,0.156-0.787,0.417l-4.539,6.686l-1.924-6.425
	c-0.121-0.402-0.492-0.678-0.912-0.678h-3.234c-0.393,0-0.666,0.384-0.541,0.754l3.625,10.638l-3.408,4.811
	c-0.268,0.379,0.002,0.9,0.465,0.9h3.287c0.312,0,0.604-0.152,0.781-0.408L84.564,13.97C84.826,13.592,84.557,13.075,84.096,13.075z
	"/>
            <path fill="#179BD7" d="M94.992,6.749h-6.84c-0.467,0-0.865,0.34-0.938,0.802l-2.766,17.537c-0.055,0.346,0.213,0.658,0.562,0.658
	h3.51c0.326,0,0.605-0.238,0.656-0.562l0.785-4.971c0.072-0.463,0.471-0.803,0.938-0.803h2.164c4.506,0,7.105-2.18,7.785-6.5
	c0.307-1.89,0.012-3.375-0.873-4.415C99.004,7.353,97.281,6.749,94.992,6.749z M95.781,13.154c-0.373,2.454-2.248,2.454-4.062,2.454
	h-1.031l0.725-4.583c0.043-0.277,0.281-0.481,0.562-0.481h0.473c1.234,0,2.4,0,3.002,0.704
	C95.809,11.668,95.918,12.292,95.781,13.154z"/>
            <path fill="#179BD7" d="M115.434,13.075h-3.273c-0.281,0-0.52,0.204-0.562,0.481l-0.145,0.916l-0.23-0.332
	c-0.709-1.029-2.289-1.373-3.867-1.373c-3.619,0-6.709,2.741-7.311,6.586c-0.312,1.918,0.131,3.752,1.219,5.031
	c1,1.176,2.426,1.666,4.125,1.666c2.916,0,4.533-1.875,4.533-1.875l-0.146,0.91c-0.055,0.348,0.213,0.66,0.564,0.66h2.949
	c0.467,0,0.865-0.34,0.938-0.803l1.771-11.209C116.053,13.388,115.785,13.075,115.434,13.075z M110.869,19.449
	c-0.314,1.871-1.801,3.127-3.695,3.127c-0.949,0-1.711-0.305-2.199-0.883c-0.484-0.574-0.666-1.391-0.514-2.301
	c0.297-1.855,1.805-3.152,3.67-3.152c0.93,0,1.686,0.309,2.184,0.892C110.816,17.721,111.014,18.543,110.869,19.449z"/>
            <path fill="#179BD7" d="M119.295,7.23l-2.807,17.858c-0.055,0.346,0.213,0.658,0.562,0.658h2.822c0.469,0,0.867-0.34,0.939-0.803
	l2.768-17.536c0.055-0.346-0.213-0.659-0.562-0.659h-3.16C119.578,6.749,119.338,6.953,119.295,7.23z"/>
            <path fill="#253B80" d="M7.266,29.154l0.523-3.322l-1.165-0.027H1.061L4.927,1.292C4.939,1.218,4.978,1.149,5.035,1.1
	c0.057-0.049,0.13-0.076,0.206-0.076h9.38c3.114,0,5.263,0.648,6.385,1.927c0.526,0.6,0.861,1.227,1.023,1.917
	c0.17,0.724,0.173,1.589,0.007,2.644l-0.012,0.077v0.676l0.526,0.298c0.443,0.235,0.795,0.504,1.065,0.812
	c0.45,0.513,0.741,1.165,0.864,1.938c0.127,0.795,0.085,1.741-0.123,2.812c-0.24,1.232-0.628,2.305-1.152,3.183
	c-0.482,0.809-1.096,1.48-1.825,2c-0.696,0.494-1.523,0.869-2.458,1.109c-0.906,0.236-1.939,0.355-3.072,0.355h-0.73
	c-0.522,0-1.029,0.188-1.427,0.525c-0.399,0.344-0.663,0.814-0.744,1.328l-0.055,0.299l-0.924,5.855l-0.042,0.215
	c-0.011,0.068-0.03,0.102-0.058,0.125c-0.025,0.021-0.061,0.035-0.096,0.035H7.266z"/>
            <path fill="#179BD7" d="M23.048,7.667L23.048,7.667L23.048,7.667c-0.028,0.179-0.06,0.362-0.096,0.55
	c-1.237,6.351-5.469,8.545-10.874,8.545H9.326c-0.661,0-1.218,0.48-1.321,1.132l0,0l0,0L6.596,26.83l-0.399,2.533
	c-0.067,0.428,0.263,0.814,0.695,0.814h4.881c0.578,0,1.069-0.42,1.16-0.99l0.048-0.248l0.919-5.832l0.059-0.32
	c0.09-0.572,0.582-0.992,1.16-0.992h0.73c4.729,0,8.431-1.92,9.513-7.476c0.452-2.321,0.218-4.259-0.978-5.622
	C24.022,8.286,23.573,7.945,23.048,7.667z"/>
            <path fill="#222D65" d="M21.754,7.151c-0.189-0.055-0.384-0.105-0.584-0.15c-0.201-0.044-0.407-0.083-0.619-0.117
	c-0.742-0.12-1.555-0.177-2.426-0.177h-7.352c-0.181,0-0.353,0.041-0.507,0.115C9.927,6.985,9.675,7.306,9.614,7.699L8.05,17.605
	l-0.045,0.289c0.103-0.652,0.66-1.132,1.321-1.132h2.752c5.405,0,9.637-2.195,10.874-8.545c0.037-0.188,0.068-0.371,0.096-0.55
	c-0.313-0.166-0.652-0.308-1.017-0.429C21.941,7.208,21.848,7.179,21.754,7.151z"/>
            <path fill="#253B80" d="M9.614,7.699c0.061-0.393,0.313-0.714,0.652-0.876c0.155-0.074,0.326-0.115,0.507-0.115h7.352
	c0.871,0,1.684,0.057,2.426,0.177c0.212,0.034,0.418,0.073,0.619,0.117c0.2,0.045,0.395,0.095,0.584,0.15
	c0.094,0.028,0.187,0.057,0.278,0.086c0.365,0.121,0.704,0.264,1.017,0.429c0.368-2.347-0.003-3.945-1.272-5.392
	C20.378,0.682,17.853,0,14.622,0h-9.38c-0.66,0-1.223,0.48-1.325,1.133L0.01,25.898c-0.077,0.49,0.301,0.932,0.795,0.932h5.791
	l1.454-9.225L9.614,7.699z"/>
        </svg>

    )
}

















