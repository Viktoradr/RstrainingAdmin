function loading(color = "") {
    $spinner = '<div class="preloader">' +
        '<div class="spinner-layer pl-size-xs pl-grey">' +
        '<div class="circle-clipper left">' +
        '<div class="circle"></div>' +
        '</div>' +
        '<div class="circle-clipper right">' +
        '<div class="circle"></div>' +
        '</div>' +
        '</div>' +
        '</div>';
}

function Rating(count) {
    var i, stars;
    for (i = 0, stars = ""; i < count; i++) {
        stars += '<i class="fa fa-star pr-1"></i>';
    }
    return stars;
}

function Montar(lista, $table, isNew) {
    if (isNew) $table.bootstrapTable('append', lista);
    else $table.bootstrapTable('load', lista);
}

function MontarCombo(lista, $combo) {
    $combo.empty();
    $combo.append($("<option />").val(0).text("Selecione..."));
    $.each(lista, function(index, item) {
        $combo.append($("<option />").val(item.ID).text(item.Nome));
    });
}

function MontarCheckbox(lista, $div, disable) {
    $div.empty();
    $.each(lista, function(index, item) {
        $div.append($("<div class='form-check' />"));
        $('div .form-check')
            .last()
            .append('<input class="form-check-input" type="checkbox" data-index="' + index + '" value="' + item.ID + '" id="check' + index + '">')
            .append('<label class="form-check-label" for="check' + index + '">' + item.Nome + '</label>');
        if (disable && index != 0) { $('div .form-check').last().find('input').attr('disabled', true); }
    });
}

function MostrarAlerta(title, msg) {
    $('#modalAviso').modal('show');
    $('#modalAvisoLabel').html(title + " - " + msg);
}

function MontarTabList(lista, $tab, $content) {

    $tab.empty();
    $content.empty();

    $.each(lista, function(index, item) {
        $tab.append($("<a href='#list-ex-" + index + "' data-index='" + index + "' data-toggle='list' role='tab'/>").text(item.Tipo.Nome));
        $tab.last().find('a').addClass("list-group-item p-2 f-14 list-group-item-action");

        $content.append($("<div role='tabpanel' id='' aria-labelledby='list-f-" + index + "' />").prop("id", "list-ex-" + index));
        $content.last().find('div').addClass("tab-pane fade");

        if (index === 0) {
            $tab.last().find('a').addClass("active");
            $content.last().find('div').addClass("show active");
        }
    });
}

function MontarTabListOnly(lista, $tab) {

    $tab.empty();

    $.each(lista, function(index, item) {
        $tab.append($("<a href='#list-ex-" + index + "' data-index='" + index + "' data-toggle='list' role='tab'/>").text(item.Tipo.Nome));
        $tab.last().find('a').addClass("list-group-item p-2 f-14 list-group-item-action");
    });
}

function MontarTabContent(lista, $tabContent) {

    $tabContent.empty();
    $tabContent.append("<ul class='list-group'/>");

    $.each(lista, function(index, item) {

        $tabContent.find('ul').append($("<li class='list-group-item flex-column align-items-start p-1' />"));
        $tabContent.find('ul li').last().append($("<div class='d-flex w-100 justify-content-between' />"));

        $tabContent.find('ul li div').last().append($("<span />").text(item.Exercicio.Nome))
            .append($("<span />").text(item.QuantidadeSerie))
            .append($("<span />").text(item.QuantidadeRepeticao))
            .append($("<span />").text(item.Carga))
            .append($("<span />").text(item.ObservacaoDescricao));
    });
}

//Para Mensagens
function MontarListGroup(lista, $listGroup, $listMsg, ID) {
    $listGroup.empty();
    $listMsg.empty();

    $.each(lista, function(index, item) {
        /*$listGroup.append(
            '<a href="#list-msg-' + item.ID + '" class="list-group-item list-group-item-action p-0 border-0 rounded-0"' +
            'id="list-gp-' + item.ID + '" data-toggle="list" role="tab" aria-controls="' + item.ID + '">' +
            '<div class="header">' +
            '<div class="d-flex justify-content-start">' +
            '<img class="mr-3 rounded-circle" src="images/user.jpg" height="48" alt="User" />' +
            '<div class="d-flex w-100 justify-content-between">' +
            '<div>' +
            '<h2 class="mt-1">' + item.Nome + '</h2>' +
            '<small>' + item.Nome + '</small>' +
            '</div>' +
            '<small class="w-25">' + item.Hora + '</small>' +
            '</div></div></div></a>'
        ); */

        $listGroup.append(
            '<a href="#list-msg-' + item.ID + '" class="list-group-item list-group-item-action p-0 border-0 rounded-0"' +
            'id="list-gp-' + item.ID + '" data-toggle="list" role="tab" aria-controls="' + item.ID + '">' +
            '<div class="header">' +
            '<div class="d-flex justify-content-start">' +
            '<img class="mr-3 rounded-circle" src="images/user.jpg" height="48" alt="User" />' +
            '<div class="d-flex w-100 flex-column">' +
            '<h2 class="d-flex justify-content-start mt-1"><b>' + item.Nome + '</b><small class="ml-auto">' + item.Hora + '</small></h2>' +
            '<small class="d-flex justify-content-start text-justify">' + item.ListaMensagem[item.ListaMensagem.length - 1].Descricao + '</small>' +
            '</div></div></div></a>'
        );

        $listMsg.append('<div role="tabpanel" aria-labelledby="list-gp-' + item.ID + '" id="list-msg-' + item.ID + '"/>');
        $listMsg.last().find("#list-msg-" + item.ID).addClass("body p-1 tab-pane fade");

        if (index === 0) {
            $listGroup.last().find('a').addClass("active");
            $listMsg.last().find('div').addClass("show active");
        }

        $.each(item.ListaMensagem, function(index2, item2) {
            if (ID == item2.UsuarioID) {
                $listMsg.find("#list-msg-" + item.ID).append($('<div class="header">' +
                    '<div class="d-flex flex-row-reverse justify-content-start">' +
                    '<img class="ml-3 rounded-circle" src="images/user.jpg" height="38" alt="User" />' +
                    '<div class="d-flex w-100 flex-column">' +
                    '<span class="d-flex justify-content-end"><small class="mr-auto">' + item2.Hora + '</small><b>' + item2.UsuarioNome + '</b></span>' +
                    '<small class="d-flex justify-content-end text-justify">' + item2.Descricao + '</small>' +
                    '</div></div></div>'));
            } else {
                $listMsg.find("#list-msg-" + item.ID).append($('<div class="header">' +
                    '<div class="d-flex justify-content-start">' +
                    '<img class="mr-3 rounded-circle" src="images/user.jpg" height="38" alt="User" />' +
                    '<div class="d-flex w-100 flex-column">' +
                    '<span class="d-flex justify-content-start"><b>' + item2.UsuarioNome + '</b><small class="ml-auto">' + item2.Hora + '</small></span>' +
                    '<small class="d-flex justify-content-start text-justify">' + item2.Descricao + '</small>' +
                    '</div></div></div>'));
            }
        });

        $listMsg.find("#list-msg-" + item.ID).append($('<div class="card-footer">' +
            '<div class="input-group input-group-sm m-0">' +
            '<input type="text" class="form-control" id="formMsg' + item.ID + '" placeholder="Escreva sua mensagem aqui ..." aria-label="Recipients username" aria-describedby="basic-addon2">' +
            '<div class="input-group-append">' +
            '<button class="btn btn-primary d-flex align-items-center btnEnviarMensagem" type="button">' +
            '<i class="material-icons text-white ">send</i>' +
            '</button></div></div></div>'));
    });
}


function MontarListPost(lista, $Posts) {
    $Posts.empty();

    $.each(lista, function(index, item) {
        var liked = item.ListaLike;
        var desliked = item.ListaDeslike;

        var post =
            '<div class="card">' +
            '<div class="header">' +
            '<div class="d-flex justify-content-start">' +
            '<img class="mr-3 rounded-circle" src="images/user.jpg" height="48" alt="User" />' +
            '<div class="d-flex w-100 justify-content-between">' +
            '<div>' +
            '<h6 class="m-0 pt-2">' + item.Usuario.Nome + '</h6>' +
            '<small>' + item.Hora + '</small>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '<img class="img-fluid w-100 h-50" alt="" src="images/background/bg_1.png" />' +
            '<div class="body">' +
            '<p class="text-justify">' + item.Descricao + '</p>' +
            '<div class="d-flex justify-content-between mt-3">';

        item.Likes == 0 ?
            post += '<a href="javascript:void(0)" onclick="liked(' + item.ID + ')" class="nav-link p-0 d-flex align-items-center"><i class="material-icons mr-1 text-muted">thumb_up</i><span>' + item.Likes + '</span></a>' :
            post += '<a href="javascript:void(0)" onclick="liked(' + item.ID + ')" class="nav-link p-0 d-flex align-items-center"><i class="material-icons mr-1 text-primary">thumb_up</i><span>' + item.Likes + '</span></a>'

        item.Comments == 0 ?
            post += '<a href="javascript:void(0)" data-toggle="collapse" data-target="#exp-' + index + '" aria-expanded="true" aria-controls="' + index + '" class="nav-link p-0 d-flex align-items-center"><i class="material-icons mr-1 text-muted">comment</i><span></span>' + item.Comments + '</span></a>' :
            post += '<a href="javascript:void(0)" data-toggle="collapse" data-target="#exp-' + index + '" aria-expanded="true" aria-controls="' + index + '" class="nav-link p-0 d-flex align-items-center"><i class="material-icons mr-1 text-success">comment</i><span></span>' + item.Comments + '</span></a>'

        item.Deslikes == 0 ?
            post += '<a href="javascript:void(0)" onclick="desliked(' + item.ID + ')" class="nav-link p-0 d-flex flex-row-reverse align-items-center"><i class="material-icons ml-1 text-muted">thumb_down</i><span>' + item.Deslikes + '</span></a>' :
            post += '<a href="javascript:void(0)" onclick="desliked(' + item.ID + ')" class="nav-link p-0 d-flex flex-row-reverse align-items-center"><i class="material-icons ml-1 text-danger">thumb_down</i><span>' + item.Deslikes + '</span></a>'

        post += '</div>' +
            '</div>' +
            '</div>';

        var comentarios = '<div id="exp-' + index + '" class="collapse" aria-labelledby="comments-' + index + '" data-parent="#posts">';
        comentarios +=
            '<div class="card">' +
            '<div class="card-body">' +
            '<div class="input-group input-group-sm m-0">' +
            '<input type="text" class="form-control" placeholder="Escreva sua mensagem aqui ...">' +
            '<div class="input-group-append">' +
            '<button class="btn btn-primary d-flex align-items-center" type="button" onclick="enviarComentario(' + index + ',' + item.ID + ')">' +
            '<i class="material-icons text-white ">send</i>' +
            '</button></div></div></div></div>';

        $.each(item.ListaComentario, function(index, item) {
            comentarios += '<div class="card">' +
                '<div class="header">' +
                '<div class="d-flex justify-content-start">' +
                '<img class="mr-3 rounded-circle" src="images/user.jpg" height="40" alt="User" />' +
                '<div class="d-flex w-100 justify-content-between">' +
                '<div>' +
                '<h6 class="m-0 font-weight-bold">' + item.Usuario.Nome +
                '<span class="px-1">-</span>' +
                '<small class="text-primary font-weight-bold f-14">' + item.Hora + '</small>' +
                '</h6>' +
                '<p class="f-14 m-0 text-justify">' + item.Descricao + '</p>' +
                '</div></div></div></div></div>';
        });

        post += (comentarios += '</div>');

        $Posts.append(post);
    });
}


function MontarListFichas(lista, $listGroup, $listExe) {
    $listGroup.empty();
    $listExe.empty();

    $.each(lista, function(index, item) {

        $.each(item.ListaFicha, function(index2, x) {

            //Lembrar de add na view o tipo da ficha
            //Colocar dentro da div rounded o tipo da ficha centralizado
            var temp = '<a href="#list-msg-' + x.ID + '" class="list-group-item list-group-item-action p-0 border-0 rounded-0"' +
                'id="list-gp-' + x.ID + '" data-toggle="list" role="tab" aria-controls="' + x.ID + '">' +
                '<div class="header">' +
                '<div class="d-flex justify-content-start">' +

                '<img class="mr-3 rounded-circle" src="images/user.jpg" height="48" alt="User" />' +

                '<div class="d-flex w-100 flex-column">' +
                '<h2 class="d-flex justify-content-start mt-1"><b>' + x.Nome + '</b><small class="ml-auto">' + item.Nivel + '</small></h2>' +
                '<span class="d-flex justify-content-start mt-1">' + x.Observacao + '<small class="ml-auto">' + x.DataCriacaoDescricao + '</small></span>' +
                '<small class="d-flex">' + Rating(x.Rating) + '</small>' +
                '</div>' +

                '</div>' +
                '</div>' +
                '</a>';

            $listGroup.append(temp);
            $listExe.append('<div role="tabpanel" aria-labelledby="list-gp-' + x.ID + '" id="list-msg-' + x.ID + '"/>');
            $listExe.find("#list-msg-" + x.ID).addClass("body p-1 tab-pane fade");

            $.each(x.ListaFichaInfo, function(index3, y) {
                $listExe.find("#list-msg-" + x.ID).append($('<div class="header">' +
                    '<div class="d-flex justify-content-start">' +
                    '<div class="d-flex w-100 flex-column">' +
                    '<span class="d-flex justify-content-start"><b>' + y.Exercicio.Nome + '</b></span>' +
                    '<div class="d-flex justify-content-between">' +
                    '<small><b>Séries:</b> ' + y.QuantidadeSerie + '</small>' +
                    '<small><b>Rep:</b> ' + y.QuantidadeRepeticao + '</small>' +
                    '<small><b>Carga:</b> ' + y.Carga + '</small>' +
                    '<small><b>Obs:</b> ' + y.Observacao.Nome + '</small>' +
                    '</div></div></div></div>'));
            });

        });
    });

    $listGroup.find('a.list-group-item').first().addClass("active show");
    $listExe.find('div').first().addClass("show active");
}