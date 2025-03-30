import StorageIcon from "@mui/icons-material/Storage";
import PeopleIcon from "@mui/icons-material/People";
import SellIcon from "@mui/icons-material/Sell";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import DescriptionIcon from "@mui/icons-material/Description";
import Estoque from "./modules/Estoque";
import Fornecedores from "./modules/Fornecedores";
import Vendas from "./modules/Vendas";
import Receita from "./modules/Receita";
import Clientes from "./modules/Clientes";
import { EstoqueAdd } from "./EstoqueAdd";
import { FormAdd } from "./FormAdd";
import { VendaAdd } from "./VendaAdd";
import { FornecedorAdd } from "./FornecedorAdd";
import { path } from "framer-motion/client";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import { ReceitaAdd } from "./ReceitaAdd";

export const modules = [
  {
    label: "Estoque",
    path: "/estoque",
    component: Estoque,
    icon: StorageIcon,
  },
  {
    label: "Fornecedores",
    path: "/fornecedores",
    component: Fornecedores,
    icon: PeopleIcon,
  },
  {
    label: "Vendas",
    path: "/vendas",
    component: Vendas,
    icon: SellIcon,
  },
  {
    label: "Receitas",
    path: "/receitas",
    component: Receita,
    icon: DescriptionIcon,
  },
  {
    label: "Clientes",
    path: "/clientes",
    component: Clientes,
    icon: PersonAddIcon,
  },
  {
    path: "/clientes/cadastro",
    component: FormAdd,
  },
  {
    path: "/estoque/adicionar",
    component: EstoqueAdd,
  },
  {
    path: "/vendas/adicionarVenda",
    component: VendaAdd,
  },
  {
    path: "/fornecedores/adicionarFornecedor",
    component: FornecedorAdd,
  },
  {
    path: "receitas/adicionarReceita",
    component: ReceitaAdd,
  },
];
