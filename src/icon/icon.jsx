/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import React from 'react';
import Type from 'prop-types';

import cn from '../cn';
import performance from '../performance';

/**
 * Базовый компонент иконки. Содержит в себе только неодходимые для компонентов иконки.
 */

@cn('icon')
@performance()
class Icon extends React.Component {
    static propTypes = {
        /** Дополнительный класс */
        className: Type.oneOfType([Type.func, Type.string]),
        /** Идентификатор компонента в DOM */
        id: Type.string,
        /** Размер иконки */
        size: Type.oneOf(['xs', 's', 'm', 'l', 'xl', 'xxl'])
    };

    static defaultProps = {
        size: 'm'
    };

    render(cn) {
        let mods = { size: this.props.size };

        return (
            <span
                className={ cn(mods) }
                id={ this.props.id }
            />
        );
    }
}

export default Icon;
