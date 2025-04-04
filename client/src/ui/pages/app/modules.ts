import StorageIcon from "@mui/icons-material/Storage";
import PeopleIcon from "@mui/icons-material/People";
import SellIcon from "@mui/icons-material/Sell";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import DescriptionIcon from '@mui/icons-material/Description';
import Estoque from "./modules/Estoque";
import Fornecedores from "./modules/Fornecedores";
import Vendas from "./modules/Vendas";
import Receita from "./modules/Receita";
import Clientes from "./modules/clients/Clientes";
import EstoqueAdd from "./modules/EstoqueAdd";
import { FormAdd } from "./modules/clients/FormAddClientes";
import { path } from "framer-motion/client";
import { DetalhesCliente } from "./modules/clients/DetalhesCliente";
import { ClientUpdate } from "./modules/clients/ClientUpdate";
import AddFornecedor from "./modules/AddFornecedor";
import AddReceita from "./modules/AddReceita";
import AddEstoque from "./modules/AddEstoque";
import AddVenda from "./modules/AddVenda";

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
    path: "/clientes/:id",
    component: DetalhesCliente,
  },
  {
    path: "/clientes/editar/:id",
    component: ClientUpdate,
  },
  {
    path: "/estoque/adicionar",
    component: EstoqueAdd,
  },
  {
    path: "/fornecedores/cadastro",
    component: AddFornecedor,
  },
  {
    path: "/receitas/cadastro",
    component: AddReceita,
  },
  {
    path: "/estoque/cadastro",
    component: AddEstoque,
  },
  {
    path: "vendas/cadastro",
    component: AddVenda,
  },
];
