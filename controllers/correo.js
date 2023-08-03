const{ request, response }=require("express");
const nodemailer=require("nodemailer");

const envioCorreo=(req=request,resp=response)=>{
    let body =req.body;
    let config=nodemailer.createTransport({
        host:'smtp.gmail.com',
        post:587,
        auth:{
            user:'carloscogake@gmail.com',
            pass:'exduivcbbjqqmttl'
        }
    });
    const opciones ={
        from:"Universidad UTE",
        subjet: "Bienvenido candidato",
        to:body.email,
        text:`
        En nombre de la UTE (Universidad Tecnológica Especializada), queremos ofrecerte nuestra mano amiga y experta para asistirte en tus necesidades académicas y profesionales. Estamos comprometidos con brindarte el mejor apoyo para que alcances tus metas y sueños.

Nuestro equipo de profesionales altamente capacitados está listo para acompañarte en tu camino de aprendizaje y desarrollo. Ya sea que necesites ayuda con investigaciones, proyectos, orientación en tu carrera, o cualquier otra consulta académica, estamos aquí para proporcionarte las herramientas y el conocimiento que necesitas.

En la Universidad UTE, creemos en la importancia de la colaboración y la excelencia. Nuestra comunidad está enfocada en fomentar un ambiente de aprendizaje inclusivo y enriquecedor, donde cada estudiante tenga la oportunidad de crecer tanto a nivel personal como profesional.

No dudes en ponerte en contacto con nosotros para explorar cómo podemos ayudarte. Estamos disponibles para responder a tus preguntas, brindarte orientación y proporcionarte recursos que te permitirán tener éxito en tus estudios y en tu futura carrera.

Esperamos poder ser parte de tu viaje educativo y contribuir a tu éxito. ¡Estamos aquí para ti en cada paso del camino!

Atentamente.

Por medio de aqui se establecera comunicacion contigo.
        `,
    }
    config.sendMail(opciones,function(error,result){
        if(error) return resp.json({ok:false,msg:error});
        return resp.json({
            ok:true,
            msg:result
        });
    });
}
module.exports={
    envioCorreo
};