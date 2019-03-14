import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CalculosService {

    constructor() { }

    calcularProteinaPDia(pesoCorporal, atividade) {
        let result = 0.0;
        switch (atividade) {
            case '1':
                result = 0.8 * pesoCorporal;
                break;
            case '2':
                result = 1.4 * pesoCorporal;
                break;
            case '3':
                result = 1.8 * pesoCorporal;
                break;
            case '4':
                result = 2.0 * pesoCorporal;
                break;
            case '5':
                result = 2.4 * pesoCorporal;
                break;
        }
        return result;
    }

    calcularIMC(altura, pesoCorporal) {
        let result = 0.0;
        const _altura = (Number(altura) / 100 );
        result = pesoCorporal / (_altura * _altura);
        return Number((result).toFixed(2));
    }

    condicaoIMC(temp, sexo) {
        let condicao = '';
        switch (sexo) {
            case 'M':
                if (temp < 20.7) {
                    condicao = 'abaixo do peso';
                    break;
                } else if (temp >= 20.7 && temp < 26.4) {
                    condicao = 'no peso ideal';
                    break;
                } else if (temp >= 26.4 && temp < 27.8) {
                    condicao = 'levemente acima do peso';
                    break;
                } else if (temp >= 27.8 && temp < 31.1) {
                    condicao = 'acima do peso ideal';
                    break;
                } else if (temp > 31.1) {
                    condicao = 'obeso';
                    break;
                }
                break;
            case 'F':
                if (temp < 19.1) {
                    condicao = 'abaixo do peso';
                    break;
                } else if (temp >= 19.1 && temp < 25.8) {
                    condicao = 'no peso ideal';
                    break;
                } else if (temp >= 25.8 && temp < 27.3) {
                    condicao = 'levemente acima do peso';
                    break;
                } else if (temp >= 27.3 && temp < 32.3) {
                    condicao = 'acima do peso ideal';
                    break;
                } else if (temp > 32.3) {
                    condicao = 'obeso';
                    break;
                }
                break;
        }
        return condicao;
    }

    calcularTMB(idade, altura, pesoCorporal, sexo) {
        let result = 0.0;
        switch (sexo) {
            case 'M':
                result = 66.4730 + (13.7516 * 77) + (5.0033 * altura) - (6.7550 * idade);
                break;
            case 'F':
                result = 655.0955 + (9.5634 * pesoCorporal) + (1.8496 * altura) - (4.6756 * idade);
                break;
        }
        return result;
    }

    calcularCaloriasPorDia(atividade, idade, altura, pesoCorporal, sexo) {
        let result = 0.0;
        const TMB = this.calcularTMB(idade, altura, pesoCorporal, sexo);
        switch (atividade) {
            case 1:
                result = TMB * 1.2;
                break;
            case 2:
                result = TMB * 1.375;
                break;
            case 3:
                result = TMB * 1.55;
                break;
            case 4:
                result = TMB * 1.725;
                break;
            case 5:
                result = TMB * 1.9;
                break;
        }
        return result;
    }

    calcularMetasDiarias(objetivo, atividade, idade, altura, pesoCorporal, sexo) {
        let result = 0;
        const KCAL = this.calcularCaloriasPorDia(atividade, idade, altura, pesoCorporal, sexo);
        // let temp = KCAL.intValue();
        switch (objetivo) {
            case 1:
                result = KCAL - 500; // Emagracer
                break;
            case 2:
                result = KCAL; // Manter
                break;
            case 3:
                result = KCAL + 500; // Ganhar
                break;
        }
        return Number((result).toFixed(1));
    }

    progressBarPeso(palvo, pcorporal) {
        let valor = 0;
        valor = (pcorporal * 100) / palvo;
        return valor;
    }

}
