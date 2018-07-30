import { ConnectionFactory } from './ConnectionFactory';
import { NegociacaoDao } from '../domain/negociacao/NegociacaoDao';

export function getNegociacaoDao() {
    
    return ConnectionFactory
            .getConnection()
            .then(conn => new NegociacaoDao(conn));
}