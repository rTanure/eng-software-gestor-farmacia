import StorageIcon from '@mui/icons-material/Storage';
import PeopleIcon from '@mui/icons-material/People';
import SellIcon from '@mui/icons-material/Sell';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Estoque from './modules/Estoque';
import Fornecedores from './modules/Fornecedores';
import Vendas from './modules/Vendas';
import Receita from './modules/Receita';
import Clientes from './modules/Clientes';

export const modules = [
  {
    "label": "Estoque",
    "path": "/estoque",
    "component": Estoque,
    "icon": StorageIcon
  },
  {
    "label": "Fornecedores",
    "path": "/fornecedores",
    "component": Fornecedores,
    "icon": PeopleIcon
  },
  {
    "label": "Vendas",
    "path": "/vendas",
    "component": Vendas,
    "icon": SellIcon
  },
  {
    "label": "Receitas",
    "path": "/receitas",
    "component": Receita,
    "icon": CurrencyExchangeIcon
  },
  {
    "label": "Clientes",
    "path": "/clientes",
    "component": Clientes,
    "icon": PersonAddIcon
  }
]