import * as React from 'react';
import "./Header.css"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useState } from 'react';
import Rodal from 'rodal';
import icon from "./img/Group 5.svg"
import { toast, ToastContainer } from 'react-toastify';
const Header = () => {
  const[RodalIsactive,setRodalIsactive]= useState(false)
  const notify = () => toast("Модальное окно открыто !");
  return (
    <div className='Header1' >
      <div className='Component_Container  h-100 ' >
              <div className='Header_Flex h-100  d-flex align-items-center justify-content-between' >
                      <div className='d-flex gap-2 align-items-center h-100 '>
                         
                          <div className='d-flex gap-3 align-items-center h-100' >
                            <button style={{all:"unset"}} onClick={notify}>
                            <button  style={{all:"unset"}} className='d-flex align-items-center gap-2' onClick={()=>setRodalIsactive(true)}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="20" viewBox="0 0 14 20" fill="none">
                                <path d="M7 9.5C6.33696 9.5 5.70107 9.23661 5.23223 8.76777C4.76339 8.29893 4.5 7.66304 4.5 7C4.5 6.33696 4.76339 5.70107 5.23223 5.23223C5.70107 4.76339 6.33696 4.5 7 4.5C7.66304 4.5 8.29893 4.76339 8.76777 5.23223C9.23661 5.70107 9.5 6.33696 9.5 7C9.5 7.3283 9.43534 7.65339 9.3097 7.95671C9.18406 8.26002 8.99991 8.53562 8.76777 8.76777C8.53562 8.99991 8.26002 9.18406 7.95671 9.3097C7.65339 9.43534 7.3283 9.5 7 9.5ZM7 0C5.14348 0 3.36301 0.737498 2.05025 2.05025C0.737498 3.36301 0 5.14348 0 7C0 12.25 7 20 7 20C7 20 14 12.25 14 7C14 5.14348 13.2625 3.36301 11.9497 2.05025C10.637 0.737498 8.85652 0 7 0Z" fill="#F2F2F2"/>
                              </svg>
                              <span>Ваш регион доставки:  </span>
                            </button>
                            </button>
                            <ToastContainer    position="top-right"
                                                autoClose={1000}
                                                hideProgressBar={false}
                                                newestOnTop={false}
                                                closeOnClick
                                                rtl={false}
                                                pauseOnFocusLoss
                                                draggable
                                                pauseOnHover
                                                theme="light"/>
                            <span className='d-flex align-items-center' >
                        
                        <Autocomplete style={{height:"100%",color:"#fff"}}
                                             id="country-select-demo"
                                             sx={{ width: 100,color:"#fff",border:"none" }}
                                             options={countries}
                                             autoHighlight
                                             getOptionLabel={(option) => option.label}
                                             renderOption={(props, option) => (
                                               <Box component="li"  sx={{ '& > img': { mr: 0, flexShrink: 0 ,color:"#fff"} }} {...props}>
                                                 {/* <img
                                                   loading="lazy"
                                                   width="20"
                                                   srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                                                   src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                                                   alt=""
                                                 /> */}
                                                 {option.label}
                                               </Box>
                                             )}
                                             renderInput={(params) => (
                                               <TextField 
                                               {...params}
                                               inputProps={{
                                                 ...params.inputProps,
                                                 autoComplete: 'new-password',
                                                   style: { color: "white",border:"none", outline: "none" } // disable autocomplete and autofill
                                                 }}
                                               />
                                             )}
                                           />

                       </span>
                       <Rodal   width={1360} height={675}  visible={RodalIsactive} opacity={0.7} onClose={()=>setRodalIsactive(false)}>
                      <div className='d-flex justify-content-between p-4 h-100 ' style={{height:"675px"}}>
                      <div  style={{position:'relative',width:"800px",overflow:'hidden',height:"620px",}}>
                      <a href="https://yandex.uz/maps?utm_medium=mapframe&utm_source=maps" style={{color:'#eee',fontSize:'12px',position:'absolute',top:'0px'}}>Яндекс Карты</a><a href="https://yandex.uz/maps/profile?ll=69.111500%2C41.137567&mode=search&rtext=41.347000%2C69.215830~41.448152%2C68.789662&rtt=auto&ruri=ymapsbm1%3A%2F%2Forg%3Foid%3D203287967764~&sctx=ZAAAAAgBEAAaKAoSCbfte9RfXFFAEZrOTgZHnURAEhIJ4nMn2H8d9z8RVwVqMXgY5j8iBgABAgMEBSgKOABA1boGSAFiKmNvbGxlY3Rpb25zX3JhbmtpbmdfbW9kZWw9Y29sbGVjdGlvbnNfZHNzbWIWbWlkZGxlX3J3cj1vZmY6R2VvQWRkcmIXZXhwX2lkPWFsbF9mb3JtdWxhc19iYW5qAnV6nQHNzEw9oAEAqAEAvQGuVdZtwgESlPCgp%2FUFxY%2BgvNsD1cSZlOEC6gEA8gEA%2BAEAggILTmFqb3QgVGFsaW2KAgCSAgCaAgxkZXNrdG9wLW1hcHM%3D&sll=69.111500%2C41.137567&source=serp_navig&sspn=1.444702%2C0.691456&text=Najot%20Talim&utm_medium=mapframe&utm_source=maps&z=10" style={{color:'#eee',fontSize:'12px',position:'absolute',top:'14px'}}>Яндекс Карты</a>
                       <iframe src="https://yandex.uz/map-widget/v1/profile?ll=69.111500%2C41.137567&mode=search&rtext=41.347000%2C69.215830~41.448152%2C68.789662&rtt=auto&ruri=ymapsbm1%3A%2F%2Forg%3Foid%3D203287967764~&sctx=ZAAAAAgBEAAaKAoSCbfte9RfXFFAEZrOTgZHnURAEhIJ4nMn2H8d9z8RVwVqMXgY5j8iBgABAgMEBSgKOABA1boGSAFiKmNvbGxlY3Rpb25zX3JhbmtpbmdfbW9kZWw9Y29sbGVjdGlvbnNfZHNzbWIWbWlkZGxlX3J3cj1vZmY6R2VvQWRkcmIXZXhwX2lkPWFsbF9mb3JtdWxhc19iYW5qAnV6nQHNzEw9oAEAqAEAvQGuVdZtwgESlPCgp%2FUFxY%2BgvNsD1cSZlOEC6gEA8gEA%2BAEAggILTmFqb3QgVGFsaW2KAgCSAgCaAgxkZXNrdG9wLW1hcHM%3D&sll=69.111500%2C41.137567&source=serp_navig&sspn=1.444702%2C0.691456&text=Najot%20Talim&z=10"     width={'100%'}  style={{position:'relative',height:"620px"}}></iframe>
                       </div>     
                    <span style={{color:"#222"}} className='p-3'>
                       Ваш город:                     
                      </span>               
                       <Autocomplete style={{color:"#fff"}}
                                             id="country-select-demo"
                                             sx={{ width: 300,color:"#fff",border:"none" }}
                                             options={countries}
                                             autoHighlight
                                             getOptionLabel={(option) => option.label}
                                             renderOption={(props, option) => (
                                               <Box component="li"  sx={{ '& > img': { mr: 0, flexShrink: 0 ,color:"#fff"} }} {...props}>
                                                 <img
                                                   loading="lazy"
                                                   width="20"
                                                   srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                                                   src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                                                   alt=""
                                                 />
                                                 {option.label}
                                               </Box>
                                             )}
                                             renderInput={(params) => (
                                               <TextField 
                                               {...params}
                                               inputProps={{
                                                 ...params.inputProps,
                                                 autoComplete: 'new-password',
                                                   style: { color: "#222",border:"none", outline: "none" } // disable autocomplete and autofill
                                                 }}
                                               />
                                             )}
                                           />
                      </div>
                       </Rodal>
                            <div className='d-flex gap-4' style={{paddingLeft:"35px"}}>
                              <li>Магазины</li>
                              <li>Помощь</li>
                              <li>Блоги</li>
                            </div>
                          </div>
                      </div>
                          

                            <div className='page_img_icon'>
                                 <div className='d-flex align-items-center gap-3'>
                                  <li className='d-flex align-items-center gap-2'>
                                    <img src={icon} alt="" />
                                    <span>Бесплатная доставка *</span>
                                  </li>
                                        <li className='d-flex align-items-center gap-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none">
  <path d="M11.5 13.8889H2V7.93651H12.3C13.3 6.74603 14.8 5.95238 16.5 5.95238C17.8 5.95238 19 6.44841 20 7.24206V1.98413C20 1.4579 19.7893 0.953233 19.4142 0.581137C19.0391 0.209041 18.5304 0 18 0H2C1.46957 0 0.960859 0.209041 0.585786 0.581137C0.210714 0.953233 0 1.4579 0 1.98413V13.8889C0 14.4151 0.210714 14.9198 0.585786 15.2919C0.960859 15.664 1.46957 15.873 2 15.873H12.6C12.2 15.2778 11.8 14.5833 11.5 13.8889ZM2 1.98413H18V3.96825H2V1.98413ZM16.5 7.93651C14.6 7.93651 13 9.52381 13 11.4087C13 13.9881 16.5 17.8571 16.5 17.8571C16.5 17.8571 20 13.9881 20 11.4087C20 9.52381 18.4 7.93651 16.5 7.93651ZM16.5 12.6984C15.8 12.6984 15.3 12.1032 15.3 11.5079C15.3 10.8135 15.9 10.3175 16.5 10.3175C17.1 10.3175 17.7 10.9127 17.7 11.5079C17.8 12.1032 17.2 12.6984 16.5 12.6984Z" fill="#BDBDBD"/>
</svg>
                                                 <span>
                                                 Оплата при получении
                                                 </span>
                                          </li>         
                                          <li className='d-flex align-items-center gap-2'>
                                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M14.4444 14H10V17L4.44444 12L10 7V10H14.4444V14ZM10 2C10.2947 2 10.5773 2.10536 10.7857 2.29289C10.994 2.48043 11.1111 2.73478 11.1111 3C11.1111 3.26522 10.994 3.51957 10.7857 3.70711C10.5773 3.89464 10.2947 4 10 4C9.70532 4 9.4227 3.89464 9.21433 3.70711C9.00595 3.51957 8.88889 3.26522 8.88889 3C8.88889 2.73478 9.00595 2.48043 9.21433 2.29289C9.4227 2.10536 9.70532 2 10 2ZM17.7778 2H13.1333C12.6667 0.84 11.4444 0 10 0C8.55556 0 7.33333 0.84 6.86667 2H2.22222C1.63285 2 1.06762 2.21071 0.650874 2.58579C0.234126 2.96086 0 3.46957 0 4V18C0 18.5304 0.234126 19.0391 0.650874 19.4142C1.06762 19.7893 1.63285 20 2.22222 20H17.7778C18.3671 20 18.9324 19.7893 19.3491 19.4142C19.7659 19.0391 20 18.5304 20 18V4C20 3.46957 19.7659 2.96086 19.3491 2.58579C18.9324 2.21071 18.3671 2 17.7778 2Z" fill="#BDBDBD"/>
</svg>

                                                  <span>Возврат в течение 14 дней</span>
                                          </li> 
                                  </div>            
                            </div>

              </div>
      
      
      









      </div> 
    </div>
  )
}

const countries = [
  { code: 'AD', label: 'Andorra', phone: '376' },
  {
    code: 'AE',
    label: 'United Arab Emirates',
    phone: '971',
  },
  { code: 'AF', label: 'Afghanistan', phone: '93' },
  {
    code: 'AG',
    label: 'Antigua and Barbuda',
    phone: '1-268',
  },
  { code: 'AI', label: 'Anguilla', phone: '1-264' },
  { code: 'AL', label: 'Albania', phone: '355' },
  { code: 'AM', label: 'Armenia', phone: '374' },
  { code: 'AO', label: 'Angola', phone: '244' },
  { code: 'AQ', label: 'Antarctica', phone: '672' },
  { code: 'AR', label: 'Argentina', phone: '54' },
  { code: 'AS', label: 'American Samoa', phone: '1-684' },
  { code: 'AT', label: 'Austria', phone: '43' },
  {
    code: 'AU',
    label: 'Australia',
    phone: '61',
    suggested: true,
  },
  { code: 'AW', label: 'Aruba', phone: '297' },
  { code: 'AX', label: 'Alland Islands', phone: '358' },
  { code: 'AZ', label: 'Azerbaijan', phone: '994' },
  {
    code: 'BA',
    label: 'Bosnia and Herzegovina',
    phone: '387',
  },
  { code: 'BB', label: 'Barbados', phone: '1-246' },
  { code: 'BD', label: 'Bangladesh', phone: '880' },
  { code: 'BE', label: 'Belgium', phone: '32' },
  { code: 'BF', label: 'Burkina Faso', phone: '226' },
  { code: 'BG', label: 'Bulgaria', phone: '359' },
  { code: 'BH', label: 'Bahrain', phone: '973' },
  { code: 'BI', label: 'Burundi', phone: '257' },
  { code: 'BJ', label: 'Benin', phone: '229' },
  { code: 'BL', label: 'Saint Barthelemy', phone: '590' },
  { code: 'BM', label: 'Bermuda', phone: '1-441' },
  { code: 'BN', label: 'Brunei Darussalam', phone: '673' },
  { code: 'BO', label: 'Bolivia', phone: '591' },
  { code: 'BR', label: 'Brazil', phone: '55' },
  { code: 'BS', label: 'Bahamas', phone: '1-242' },
  { code: 'BT', label: 'Bhutan', phone: '975' },
  { code: 'BV', label: 'Bouvet Island', phone: '47' },
  { code: 'BW', label: 'Botswana', phone: '267' },
  { code: 'BY', label: 'Belarus', phone: '375' },
  { code: 'BZ', label: 'Belize', phone: '501' },
  {
    code: 'CA',
    label: 'Canada',
    phone: '1',
    suggested: true,
  },
  {
    code: 'CC',
    label: 'Cocos (Keeling) Islands',
    phone: '61',
  },
  {
    code: 'CD',
    label: 'Congo, Democratic Republic of the',
    phone: '243',
  },
  {
    code: 'CF',
    label: 'Central African Republic',
    phone: '236',
  },
  {
    code: 'CG',
    label: 'Congo, Republic of the',
    phone: '242',
  },
  { code: 'CH', label: 'Switzerland', phone: '41' },
  { code: 'CI', label: "Cote d'Ivoire", phone: '225' },
  { code: 'CK', label: 'Cook Islands', phone: '682' },
  { code: 'CL', label: 'Chile', phone: '56' },
  { code: 'CM', label: 'Cameroon', phone: '237' },
  { code: 'CN', label: 'China', phone: '86' },
  { code: 'CO', label: 'Colombia', phone: '57' },
  { code: 'CR', label: 'Costa Rica', phone: '506' },
  { code: 'CU', label: 'Cuba', phone: '53' },
  { code: 'CV', label: 'Cape Verde', phone: '238' },
  { code: 'CW', label: 'Curacao', phone: '599' },
  { code: 'CX', label: 'Christmas Island', phone: '61' },
  { code: 'CY', label: 'Cyprus', phone: '357' },
  { code: 'CZ', label: 'Czech Republic', phone: '420' },
  {
    code: 'DE',
    label: 'Germany',
    phone: '49',
    suggested: true,
  },
  { code: 'DJ', label: 'Djibouti', phone: '253' },
  { code: 'DK', label: 'Denmark', phone: '45' },
  { code: 'DM', label: 'Dominica', phone: '1-767' },
  {
    code: 'DO',
    label: 'Dominican Republic',
    phone: '1-809',
  },
  { code: 'DZ', label: 'Algeria', phone: '213' },
  { code: 'EC', label: 'Ecuador', phone: '593' },
  { code: 'EE', label: 'Estonia', phone: '372' },
  { code: 'EG', label: 'Egypt', phone: '20' },
  { code: 'EH', label: 'Western Sahara', phone: '212' },
  { code: 'ER', label: 'Eritrea', phone: '291' },
  { code: 'ES', label: 'Spain', phone: '34' },
  { code: 'ET', label: 'Ethiopia', phone: '251' },
  { code: 'FI', label: 'Finland', phone: '358' },
  { code: 'FJ', label: 'Fiji', phone: '679' },
  {
    code: 'FK',
    label: 'Falkland Islands (Malvinas)',
    phone: '500',
  },
  {
    code: 'FM',
    label: 'Micronesia, Federated States of',
    phone: '691',
  },
  { code: 'FO', label: 'Faroe Islands', phone: '298' },
  {
    code: 'FR',
    label: 'France',
    phone: '33',
    suggested: true,
  },
  { code: 'GA', label: 'Gabon', phone: '241' },
  { code: 'GB', label: 'United Kingdom', phone: '44' },
  { code: 'GD', label: 'Grenada', phone: '1-473' },
  { code: 'GE', label: 'Georgia', phone: '995' },
  { code: 'GF', label: 'French Guiana', phone: '594' },
  { code: 'GG', label: 'Guernsey', phone: '44' },
  { code: 'GH', label: 'Ghana', phone: '233' },
  { code: 'GI', label: 'Gibraltar', phone: '350' },
  { code: 'GL', label: 'Greenland', phone: '299' },
  { code: 'GM', label: 'Gambia', phone: '220' },
  { code: 'GN', label: 'Guinea', phone: '224' },
  { code: 'GP', label: 'Guadeloupe', phone: '590' },
  { code: 'GQ', label: 'Equatorial Guinea', phone: '240' },
  { code: 'GR', label: 'Greece', phone: '30' },
  {
    code: 'GS',
    label: 'South Georgia and the South Sandwich Islands',
    phone: '500',
  },
  { code: 'GT', label: 'Guatemala', phone: '502' },
  { code: 'GU', label: 'Guam', phone: '1-671' },
  { code: 'GW', label: 'Guinea-Bissau', phone: '245' },
  { code: 'GY', label: 'Guyana', phone: '592' },
  { code: 'HK', label: 'Hong Kong', phone: '852' },
  {
    code: 'HM',
    label: 'Heard Island and McDonald Islands',
    phone: '672',
  },
  { code: 'HN', label: 'Honduras', phone: '504' },
  { code: 'HR', label: 'Croatia', phone: '385' },
  { code: 'HT', label: 'Haiti', phone: '509' },
  { code: 'HU', label: 'Hungary', phone: '36' },
  { code: 'ID', label: 'Indonesia', phone: '62' },
  { code: 'IE', label: 'Ireland', phone: '353' },
  { code: 'IL', label: 'Israel', phone: '972' },
  { code: 'IM', label: 'Isle of Man', phone: '44' },
  { code: 'IN', label: 'India', phone: '91' },
  {
    code: 'IO',
    label: 'British Indian Ocean Territory',
    phone: '246',
  },
  { code: 'IQ', label: 'Iraq', phone: '964' },
  {
    code: 'IR',
    label: 'Iran, Islamic Republic of',
    phone: '98',
  },
  { code: 'IS', label: 'Iceland', phone: '354' },
  { code: 'IT', label: 'Italy', phone: '39' },
  { code: 'JE', label: 'Jersey', phone: '44' },
  { code: 'JM', label: 'Jamaica', phone: '1-876' },
  { code: 'JO', label: 'Jordan', phone: '962' },
  {
    code: 'JP',
    label: 'Japan',
    phone: '81',
    suggested: true,
  },
  { code: 'KE', label: 'Kenya', phone: '254' },
  { code: 'KG', label: 'Kyrgyzstan', phone: '996' },
  { code: 'KH', label: 'Cambodia', phone: '855' },
  { code: 'KI', label: 'Kiribati', phone: '686' },
  { code: 'KM', label: 'Comoros', phone: '269' },
  {
    code: 'KN',
    label: 'Saint Kitts and Nevis',
    phone: '1-869',
  },
  {
    code: 'KP',
    label: "Korea, Democratic People's Republic of",
    phone: '850',
  },
  { code: 'KR', label: 'Korea, Republic of', phone: '82' },
  { code: 'KW', label: 'Kuwait', phone: '965' },
  { code: 'KY', label: 'Cayman Islands', phone: '1-345' },
  { code: 'KZ', label: 'Kazakhstan', phone: '7' },
  {
    code: 'LA',
    label: "Lao People's Democratic Republic",
    phone: '856',
  },
  { code: 'LB', label: 'Lebanon', phone: '961' },
  { code: 'LC', label: 'Saint Lucia', phone: '1-758' },
  { code: 'LI', label: 'Liechtenstein', phone: '423' },
  { code: 'LK', label: 'Sri Lanka', phone: '94' },
  { code: 'LR', label: 'Liberia', phone: '231' },
  { code: 'LS', label: 'Lesotho', phone: '266' },
  { code: 'LT', label: 'Lithuania', phone: '370' },
  { code: 'LU', label: 'Luxembourg', phone: '352' },
  { code: 'LV', label: 'Latvia', phone: '371' },
  { code: 'LY', label: 'Libya', phone: '218' },
  { code: 'MA', label: 'Morocco', phone: '212' },
  { code: 'MC', label: 'Monaco', phone: '377' },
  {
    code: 'MD',
    label: 'Moldova, Republic of',
    phone: '373',
  },
  { code: 'ME', label: 'Montenegro', phone: '382' },
  {
    code: 'MF',
    label: 'Saint Martin (French part)',
    phone: '590',
  },
  { code: 'MG', label: 'Madagascar', phone: '261' },
  { code: 'MH', label: 'Marshall Islands', phone: '692' },
  {
    code: 'MK',
    label: 'Macedonia, the Former Yugoslav Republic of',
    phone: '389',
  },
  { code: 'ML', label: 'Mali', phone: '223' },
  { code: 'MM', label: 'Myanmar', phone: '95' },
  { code: 'MN', label: 'Mongolia', phone: '976' },
  { code: 'MO', label: 'Macao', phone: '853' },
  {
    code: 'MP',
    label: 'Northern Mariana Islands',
    phone: '1-670',
  },
  { code: 'MQ', label: 'Martinique', phone: '596' },
  { code: 'MR', label: 'Mauritania', phone: '222' },
  { code: 'MS', label: 'Montserrat', phone: '1-664' },
  { code: 'MT', label: 'Malta', phone: '356' },
  { code: 'MU', label: 'Mauritius', phone: '230' },
  { code: 'MV', label: 'Maldives', phone: '960' },
  { code: 'MW', label: 'Malawi', phone: '265' },
  { code: 'MX', label: 'Mexico', phone: '52' },
  { code: 'MY', label: 'Malaysia', phone: '60' },
  { code: 'MZ', label: 'Mozambique', phone: '258' },
  { code: 'NA', label: 'Namibia', phone: '264' },
  { code: 'NC', label: 'New Caledonia', phone: '687' },
  { code: 'NE', label: 'Niger', phone: '227' },
  { code: 'NF', label: 'Norfolk Island', phone: '672' },
  { code: 'NG', label: 'Nigeria', phone: '234' },
  { code: 'NI', label: 'Nicaragua', phone: '505' },
  { code: 'NL', label: 'Netherlands', phone: '31' },
  { code: 'NO', label: 'Norway', phone: '47' },
  { code: 'NP', label: 'Nepal', phone: '977' },
  { code: 'NR', label: 'Nauru', phone: '674' },
  { code: 'NU', label: 'Niue', phone: '683' },
  { code: 'NZ', label: 'New Zealand', phone: '64' },
  { code: 'OM', label: 'Oman', phone: '968' },
  { code: 'PA', label: 'Panama', phone: '507' },
  { code: 'PE', label: 'Peru', phone: '51' },
  { code: 'PF', label: 'French Polynesia', phone: '689' },
  { code: 'PG', label: 'Papua New Guinea', phone: '675' },
  { code: 'PH', label: 'Philippines', phone: '63' },
  { code: 'PK', label: 'Pakistan', phone: '92' },
  { code: 'PL', label: 'Poland', phone: '48' },
  {
    code: 'PM',
    label: 'Saint Pierre and Miquelon',
    phone: '508',
  },
  { code: 'PN', label: 'Pitcairn', phone: '870' },
  { code: 'PR', label: 'Puerto Rico', phone: '1' },
  {
    code: 'PS',
    label: 'Palestine, State of',
    phone: '970',
  },
  { code: 'PT', label: 'Portugal', phone: '351' },
  { code: 'PW', label: 'Palau', phone: '680' },
  { code: 'PY', label: 'Paraguay', phone: '595' },
  { code: 'QA', label: 'Qatar', phone: '974' },
  { code: 'RE', label: 'Reunion', phone: '262' },
  { code: 'RO', label: 'Romania', phone: '40' },
  { code: 'RS', label: 'Serbia', phone: '381' },
  { code: 'RU', label: 'Russian Federation', phone: '7' },
  { code: 'RW', label: 'Rwanda', phone: '250' },
  { code: 'SA', label: 'Saudi Arabia', phone: '966' },
  { code: 'SB', label: 'Solomon Islands', phone: '677' },
  { code: 'SC', label: 'Seychelles', phone: '248' },
  { code: 'SD', label: 'Sudan', phone: '249' },
  { code: 'SE', label: 'Sweden', phone: '46' },
  { code: 'SG', label: 'Singapore', phone: '65' },
  { code: 'SH', label: 'Saint Helena', phone: '290' },
  { code: 'SI', label: 'Slovenia', phone: '386' },
  {
    code: 'SJ',
    label: 'Svalbard and Jan Mayen',
    phone: '47',
  },
  { code: 'SK', label: 'Slovakia', phone: '421' },
  { code: 'SL', label: 'Sierra Leone', phone: '232' },
  { code: 'SM', label: 'San Marino', phone: '378' },
  { code: 'SN', label: 'Senegal', phone: '221' },
  { code: 'SO', label: 'Somalia', phone: '252' },
  { code: 'SR', label: 'Suriname', phone: '597' },
  { code: 'SS', label: 'South Sudan', phone: '211' },
  {
    code: 'ST',
    label: 'Sao Tome and Principe',
    phone: '239',
  },
  { code: 'SV', label: 'El Salvador', phone: '503' },
  {
    code: 'SX',
    label: 'Sint Maarten (Dutch part)',
    phone: '1-721',
  },
  {
    code: 'SY',
    label: 'Syrian Arab Republic',
    phone: '963',
  },
  { code: 'SZ', label: 'Swaziland', phone: '268' },
  {
    code: 'TC',
    label: 'Turks and Caicos Islands',
    phone: '1-649',
  },
  { code: 'TD', label: 'Chad', phone: '235' },
  {
    code: 'TF',
    label: 'French Southern Territories',
    phone: '262',
  },
  { code: 'TG', label: 'Togo', phone: '228' },
  { code: 'TH', label: 'Thailand', phone: '66' },
  { code: 'TJ', label: 'Tajikistan', phone: '992' },
  { code: 'TK', label: 'Tokelau', phone: '690' },
  { code: 'TL', label: 'Timor-Leste', phone: '670' },
  { code: 'TM', label: 'Turkmenistan', phone: '993' },
  { code: 'TN', label: 'Tunisia', phone: '216' },
  { code: 'TO', label: 'Tonga', phone: '676' },
  { code: 'TR', label: 'Turkey', phone: '90' },
  {
    code: 'TT',
    label: 'Trinidad and Tobago',
    phone: '1-868',
  },
  { code: 'TV', label: 'Tuvalu', phone: '688' },
  {
    code: 'TW',
    label: 'Taiwan, Republic of China',
    phone: '886',
  },
  {
    code: 'TZ',
    label: 'United Republic of Tanzania',
    phone: '255',
  },
  { code: 'UA', label: 'Ukraine', phone: '380' },
  { code: 'UG', label: 'Uganda', phone: '256' },
  {
    code: 'US',
    label: 'United States',
    phone: '1',
    suggested: true,
  },
  { code: 'UY', label: 'Uruguay', phone: '598' },
  { code: 'UZ', label: 'Uzbekistan', phone: '998' },
  {
    code: 'VA',
    label: 'Holy See (Vatican City State)',
    phone: '379',
  },
  {
    code: 'VC',
    label: 'Saint Vincent and the Grenadines',
    phone: '1-784',
  },
  { code: 'VE', label: 'Venezuela', phone: '58' },
  {
    code: 'VG',
    label: 'British Virgin Islands',
    phone: '1-284',
  },
  {
    code: 'VI',
    label: 'US Virgin Islands',
    phone: '1-340',
  },
  { code: 'VN', label: 'Vietnam', phone: '84' },
  { code: 'VU', label: 'Vanuatu', phone: '678' },
  { code: 'WF', label: 'Wallis and Futuna', phone: '681' },
  { code: 'WS', label: 'Samoa', phone: '685' },
  { code: 'XK', label: 'Kosovo', phone: '383' },
  { code: 'YE', label: 'Yemen', phone: '967' },
  { code: 'YT', label: 'Mayotte', phone: '262' },
  { code: 'ZA', label: 'South Africa', phone: '27' },
  { code: 'ZM', label: 'Zambia', phone: '260' },
  { code: 'ZW', label: 'Zimbabwe', phone: '263' },
];
export default Header