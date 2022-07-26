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














