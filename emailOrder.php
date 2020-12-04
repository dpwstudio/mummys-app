<?php


switch ($_SERVER['REQUEST_METHOD']) {
    case ("OPTIONS"): //Allow preflighting to take place.
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: POST");
        header("Access-Control-Allow-Headers: content-type");
        exit;
    case ("POST"): //Send the email;
        header("Access-Control-Allow-Origin: *");

        $json = file_get_contents('php://input');
        $params = json_decode($json);

        $name = trim(stripslashes($params->name));
        $email = trim(stripslashes($params->email));
        $phone = trim(stripslashes($params->phone));
        $originalDate = $params->date;
        $date = date("d/m/Y", strtotime($originalDate));
        $hour = trim(stripslashes($params->hour));
        $addressStart = $params->from;
        $addressEnd = $params->to;
        $description = $params->description;

        $headers  = "MIME-Version: 1.0\r\n";
        $headers .= "Reply-To: ". $email . "\r\n";
        $headers .= "Content-type: text/html; charset= utf8\n";
        $headers .= "From: Kdrive.fr - Taxi Moto <contact@kdrive.fr>";

        $to = 'dpw.contact@gmail.com';

        $subject = '[KDrive] Une nouvelle demande de Taxi Moto a été effectué sur KDrive.fr';

        $message = '<!DOCTYPE html>
        <html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
          xmlns:o="urn:schemas-microsoft-com:office:office">
        
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="x-apple-disable-message-reformatting">
          <title></title>
        
          <link href="https://fonts.googleapis.com/css?family=Work+Sans:200,300,400,500,600,700" rel="stylesheet">
        
          <style>
            html,
            body {
              margin: 0 auto !important;
              padding: 0 !important;
              height: 100% !important;
              width: 100% !important;
              background: #f1f1f1;
            }
        
            * {
              -ms-text-size-adjust: 100%;
              -webkit-text-size-adjust: 100%;
            }
        
            div[style*="margin: 16px 0"] {
              margin: 0 !important;
            }
        
            table,
            td {
              mso-table-lspace: 0pt !important;
              mso-table-rspace: 0pt !important;
            }
        
            table {
              border-spacing: 0 !important;
              border-collapse: collapse !important;
              table-layout: fixed !important;
              margin: 0 auto !important;
             }
             
            img {
              -ms-interpolation-mode: bicubic;
            }
        
            a {
              text-decoration: none;
            }
        
            *[x-apple-data-detectors],
            .unstyle-auto-detected-links *,
            .aBn {
              border-bottom: 0 !important;
              cursor: default !important;
              color: inherit !important;
              text-decoration: none !important;
              font-size: inherit !important;
              font-family: inherit !important;
              font-weight: inherit !important;
              line-height: inherit !important;
            }
        
            .a6S {
              display: none !important;
              opacity: 0.01 !important;
            }
        
            .im {
              color: inherit !important;
            }
        
            img.g-img+div {
              display: none !important;
             }
             
            @media only screen and (min-device-width: 320px) and (max-device-width: 374px) {
              u~div .email-container {
                min-width: 320px !important;
              }
             }
             
            @media only screen and (min-device-width: 375px) and (max-device-width: 413px) {
              u~div .email-container {
                min-width: 375px !important;
              }
            }
        
            @media only screen and (min-device-width: 414px) {
              u~div .email-container {
                min-width: 414px !important;
              }
            }
        
          </style>
        
          <style>
            .primary {
              background: #f9d700;
            }
        
            .bg_white {
              background: #ffffff;
            }
        
            .bg_light {
              background: #f7fafa;
            }
        
            .bg_black {
              background: #000000;
            }
        
            .bg_dark {
              background: rgba(0, 0, 0, .8);
            }
        
            .email-section {
              padding: 2.5em;
            }
        
            .btn {
              padding: 10px 15px;
              display: inline-block;
            }
        
            .btn.btn-primary {
              border-radius: 5px;
              background: #f9d700;
              color: #ffffff;
            }
        
            .btn.btn-white {
              border-radius: 5px;
              background: #ffffff;
              color: #000000;
            }
        
            .btn.btn-white-outline {
              border-radius: 5px;
              background: transparent;
              border: 1px solid #fff;
              color: #fff;
            }
        
            .btn.btn-black-outline {
              border-radius: 0px;
              background: transparent;
              border: 2px solid #000;
              color: #000;
              font-weight: 700;
            }
        
            .btn-custom {
              color: rgba(0, 0, 0, .3);
              text-decoration: underline;
            }
        
            h1,
            h2,
            h3,
            h4,
            h5,
            h6 {
              font-family: \'Work Sans\', sans-serif;
              color: #000000;
              margin-top: 0;
              font-weight: 400;
            }
        
            body {
              font-family: \'Work Sans\', sans-serif;
              font-weight: 400;
              font-size: 15px;
              line-height: 1.8;
              color: rgba(0, 0, 0, .4);
            }
        
            a {
              color: #f9d700;
            }
        
            table {}
        
            .logo h1 {
              margin: 0;
            }
        
            .logo h1 a {
              color: #f9d700;
              font-size: 24px;
              font-weight: 700;
              font-family: \'Work Sans\', sans-serif;
             }
             
            .hero {
              position: relative;
              z-index: 0;
            }
        
            .hero .text {
              color: rgba(0, 0, 0, .3);
            }
        
            .hero .text h2 {
              color: #000;
              font-size: 34px;
              margin-bottom: 15px;
              font-weight: 300;
              line-height: 1.2;
            }
        
            .hero .text h3 {
              font-size: 24px;
              font-weight: 200;
            }
        
            .hero .text h2 span {
              font-weight: 600;
              color: #000;
            }
        
            .product-entry {
              display: flex;
              align-items: center;
              position: relative;
              float: left;
              padding-top: 20px;
            }
        
            .product-entry .text {
              width: calc(100% - 125px);
              padding-left: 20px;
            }
        
            .product-entry .text h3 {
              margin-bottom: 0;
              padding-bottom: 0;
            }
        
            .product-entry .text p {
              margin-top: 0;
            }
        
            .product-entry img,
            .product-entry .text {
              float: left;
            }
        
            ul.social {
              padding: 0;
            }
        
            ul.social li {
              display: inline-block;
              margin-right: 10px;
            }
        
        
            .footer {
              border-top: 1px solid rgba(0, 0, 0, .05);
              color: #fff;
            }
        
            .footer .heading {
              color: #fff;
              font-size: 20px;
            }
        
            .footer ul {
              margin: 0;
              padding: 0;
            }
        
            .footer ul li {
              list-style: none;
              margin-bottom: 10px;
            }
        
            .footer ul li a {
              color: #fff;
            }
        
        
            @media screen and (max-width: 500px) {}
        
          </style>
        
        
        </head>
        
        <body width="100%" style="margin: 0; padding: 0 !important; mso-line-height-rule: exactly; background-color: #f1f1f1;">
          <center style="width: 100%; background-color: #f1f1f1;">
            <div
              style="display: none; font-size: 1px;max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden; mso-hide: all; font-family: sans-serif;">
            </div>
            <div style="max-width: 600px; margin: 0 auto;" class="email-container">
              <!-- BEGIN BODY -->
              <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%"
                style="margin: auto;">
                <tr>
                  <td valign="top" class="bg_white" style="padding: 1em 2.5em 0 2.5em;">
                    <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                      <tr>
                        <td class="logo" style="text-align: center;">
                          <h1><a href="#"><img src="src/assets/img/logo.png" alt="" width="100"></a></h1>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr><!-- end tr -->
                <tr>
                  <td valign="middle" class="hero bg_white" style="padding: 2em 0 2em 0;">
                    <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                      <tr>
                        <td style="padding: 0 2.5em; text-align: left;">
                          <div class="text">
                            <h2>Bonjour Mohamed,</h2>
                            <h3>Une demande de Taxi Moto vient d\'etre effectué sur <a href="http://kdrive.fr">Kdrive.fr</a>, elle concerne le trajet suivant :</h3>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr><!-- end tr -->
                <tr>
                  <table class="bg_white" role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                    <tr style="border-bottom: 1px solid rgba(0,0,0,.05);">
                      <th width="80%" style="text-align:left; padding: 0 2.5em; color: #000; padding-bottom: 20px">Détails</th>
                    </tr>
                    <tr style="border-bottom: 1px solid rgba(0,0,0,.05);">
                      <td valign="middle" width="80%" style="text-align:left; padding: 0 2.5em;">
                        <div class="product-entry">
                          <img src="https://image.flaticon.com/icons/png/512/469/469119.png" alt=""
                            style="width: 85px; max-width: 600px; height: auto; margin: 0 15px 20px 0; display: block;">
                          <div class="text">
                            <h3>'. $addressStart .' => '. $addressEnd .'</h3>
                            <h4>Départ le '. $date .' à '. $hour .'</h4>
                            <span>Le client se nomme '. $name .'.</span><br>
                            <span>Son adresse email est <a href="mailto:'. $email .'">'. $email .'.</a></span><br>
                            <span>Son numéro de téléphone est le <a href="tel:'. $phone .'">'. $phone .'.</a></span><br>
                            <p>'. $description .'</p>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td valign="middle" style="text-align:center; padding: 1em 2.5em;">
                        <p><a href="tel:'. $phone .'" class="btn btn-primary">Appeler le client</a></p>
                      </td>
                    </tr>
                  </table>
                </tr>
              </table>
              <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%"
                style="margin: auto;">
                <tr>
                  <td valign="middle" class="bg_black footer email-section">
                    <table>
                      <tr>
                        <td valign="top" width="33.333%" style="padding-top: 20px;">
                          <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                            <tr>
                              <td style="text-align: left; padding-right: 10px;">
                                <h3 class="heading"><span style="color: #f9d700; font-weight: 600;">KDRIVE</span> Taxi Moto</h3>
                                <p>15 rue Julien Mocquard
                                            92230 Gennevilliers, France
                                </p>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td class="bg_white" style="text-align: center;">
                    <p>Ceci est un email automatique, merci de ne pas y répondre.</a></p>
                  </td>
                </tr>
              </table>
        
            </div>
          </center>
        </body>
        </html>';

        // Sending email
        if (mail($to, $subject, $message, $headers)) {
            echo 'Success: Your mail has been sent successfully.';
        } else {
            echo 'Error: Unable to send email. Please try again.';
        }
        break;
    default: //Reject any non POST or OPTIONS requests.
        header("Allow: POST", true, 405);
        exit;
}
 