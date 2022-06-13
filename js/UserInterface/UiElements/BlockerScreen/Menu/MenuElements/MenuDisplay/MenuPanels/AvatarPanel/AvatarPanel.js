import { UiElement } from "../../../../../../UiElement.js";
import { AvatarSelectButton } from "./AvatarPanelElements/AvatarSelectButton.js"

const defaultMapping = { walk: 1, idle: 2, run: 3, jump: 5, fall: 4 };
const defaultAnimations = '../../../resources/animations/defaultAvatar.glb';

export class AvatarPanel extends UiElement {
    constructor(){
        super({
            style: {
                height: "100%",
                display: "none"
            }
        })

        this.appendChild(new UiElement({
            innerHTML: "Select an Avatar",
            style: {
                width: "100%",
                fontWeight: "bold",
                fontSize: "25px",
                textAlign: "center",
                paddingTop: "50px"
            }
        }));

        this.maleAvatarSelectButton = new AvatarSelectButton(
            "male",
            '//asset.airclass.io/public/joe.glb',
            '//asset.airclass.io/public/joe@animation.glb',
            { walk: 1, idle: 2, run: 3, jump: 4, fall: 5 }
        );

        this.femaleAvatarSelectButton = new AvatarSelectButton(
            "female",
            '//asset.airclass.io/public/megan.glb',
            '//asset.airclass.io/public/megan@animation.glb',
            { walk: 1, idle: 2, run: 3, jump: 4, fall: 5 }
        );

        this.appendChildList([
            this.maleAvatarSelectButton,
            this.femaleAvatarSelectButton
        ])
    } 
}